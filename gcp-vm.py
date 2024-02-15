from dotenv import load_dotenv
import os
import subprocess
import sys

def create_vm(vm_name: str, tags: str = "http-server"):
  region = str(os.getenv('GCP_ZONE'))[:-2]
  gcloud_command = f"""gcloud compute instances create {vm_name} \
    --project={os.getenv('GCP_PROJECT')} \
    --zone={os.getenv('GCP_ZONE')} \
    --machine-type=e2-standard-2 \
    --network-interface=network-tier=PREMIUM,stack-type=IPV4_ONLY,subnet=default \
    --metadata=startup-script=\\ \\
\\#\\!\\ /bin/bash$'\\n'\\ apt\\ update$'\\n'\\ apt\\ -y\\ install\\ apache2$'\\n'\\ cat\\ \\<\\<EOF\\ \\>\\ /var/www/html/index.html$'\n'\ \<html\>\<body\>\<p\>Linux\ startup\ script\ added\ directly.\</p\>\</body\>\</html\>$'\n'\ EOF \
    --no-restart-on-failure \
    --maintenance-policy=TERMINATE \
    --provisioning-model=SPOT \
    --instance-termination-action=DELETE \
    --service-account={os.getenv('DEFAULT_COMPUTE_SERVICE_ACCOUNT')} \
    --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append \
    --tags={tags} \
    --create-disk=auto-delete=yes,boot=yes,device-name=f{vm_name},image=projects/debian-cloud/global/images/debian-12-bookworm-v20240213,mode=rw,size=10,type=projects/{os.getenv('GCP_PROJECT')}/zones/{os.getenv('GCP_ZONE')}/diskTypes/pd-balanced \
    --no-shielded-secure-boot \
    --shielded-vtpm \
    --shielded-integrity-monitoring \
    --labels=goog-ec-src=vm_add-gcloud \
    --reservation-affinity=any"""
  try:
    subprocess.run(gcloud_command, shell=True, check=True)
    print(f"VM instance {vm_name} created successfully")
  except subprocess.CalledProcessError as e:
    print(f"Error creating VM instance {vm_name}: {e}")

def delete_vm(vm_name: str):
  gcloud_command = f"gcloud compute instances delete {vm_name} --zone={os.getenv('GCP_ZONE')} --quiet"
  try:
    print(f"deleting VM instance {vm_name} ...")
    subprocess.run(gcloud_command, shell=True, check=True)
  except subprocess.CalledProcessError as e:
    print(f"error deleting VM instance {vm_name}: {e}")

def enable_http_traffic():
  gcloud_command = f"gcloud compute firewall-rules create allow-http --direction=INGRESS --priority=1000 --network=default --action=ALLOW --rules=tcp:80 --source-ranges=0.0.0.0/0"
  try:
    print(f"enabling HTTP traffic for 'http-server' tag instances...")
    subprocess.run(gcloud_command, shell=True, check=True)
  except subprocess.CalledProcessError as e:
    print(f"error enabling HTTP traffic for 'http-server' tag instances: {e}")

def get_vm_ip(vm_name: str) :
  gcloud_command = f"gcloud compute instances describe {vm_name} --format='get(networkInterfaces[0].accessConfigs[0].natIP)'"
  try:
    print(f"getting IP for VM instance {vm_name} ...")
    subprocess.run(gcloud_command, shell=True, check=True)
  except subprocess.CalledProcessError as e:
    print(str(e))
    print(f"error getting IP for VM instance {vm_name}")
  
if __name__ == '__main__':
  load_dotenv()

  # check if required env vars exist and are not empty
  required_env_vars = ['DEFAULT_COMPUTE_SERVICE_ACCOUNT', 'GCP_PROJECT', 'GCP_ZONE']
  for e_var in required_env_vars:
    if os.getenv(e_var) is None:
      print(f"error: missing required environment variable {e_var}")
      sys.exit(1)
    elif str(os.getenv(e_var)).strip() == '':
        print(f"error: required environment variable {e_var} is empty")
        sys.exit(1)

  if (len(sys.argv) < 1):
    print("usage: python gcp-vm.py <action> ...")
    sys.exit(1)

  # parse first argument as action
  action = sys.argv[1]

  actions_requiring_vm_name = ["create", "delete", "ip"]
  vm_name = ''
  if action in actions_requiring_vm_name:
    if (len(sys.argv) < 3):
      print(f"usage: python gcp-vm.py {action} <vm_name>")
      sys.exit(1)
    else:
      vm_name = sys.argv[2]

  if action == "create":
    # get the name of the VM instance
    print(f"creating VM instance {vm_name} ...")
    create_vm(vm_name)

  elif action == "delete":
    # get the name of the VM instance
    delete_vm(vm_name)

  elif action == "enable-http":
    enable_http_traffic()

  elif action == "ip":
    # get the name of the VM instance
    get_vm_ip(vm_name)