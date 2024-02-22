/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("async function getTickets() {\n    try {\n        const call = await fetch(`${window.HOST}/api/tickets`);\n        const data = await call.json();\n        return data;\n    } catch (error) {\n        console.error('Error:', error);\n        return [];\n    }\n}\n\n// when my HTML page is full loaded, trigger that code\ndocument.addEventListener('DOMContentLoaded', async () => {\n    console.log(\"javascript is loaded\");\n\n    let tickets = [];\n    tickets = await getTickets();\n\n    // generate HTML for each ticket row\n    tickets.forEach(ticket => {\n        const tr = document.createElement('tr');\n        tr.innerHTML = `\n            <td>${ticket.id}</td>\n            <td>${ticket.title}</td>\n            <td>${ticket.description}</td>\n            <td>\n                <span class=\"status-label ${ticket.status === 'Assigned' ? 'assigned' : 'unassigned'}\">${ticket.status}</span>\n            </td>\n            <td>${ticket.assignedTo || '-'}</td>\n            <td class=\"action-buttons\">\n                <button class=\"button\" onclick=\"deleteTicket(${ticket.id})\">Delete</button>\n                <button class=\"button\" onclick=\"assignTicket(${ticket.id})\">Assign</button>\n            </td>\n        `;\n        document.querySelector('tbody').appendChild(tr);\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBLG9DQUFvQyxZQUFZO0FBQ2hEO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsVUFBVTtBQUM1QixrQkFBa0IsYUFBYTtBQUMvQixrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0EsNENBQTRDLHlEQUF5RCxJQUFJLGNBQWM7QUFDdkg7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDO0FBQ0EsK0RBQStELFVBQVU7QUFDekUsK0RBQStELFVBQVU7QUFDekU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJmZWN0LXRpY2tldC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFRpY2tldHMoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2FsbCA9IGF3YWl0IGZldGNoKGAke3dpbmRvdy5IT1NUfS9hcGkvdGlja2V0c2ApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2FsbC5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuLy8gd2hlbiBteSBIVE1MIHBhZ2UgaXMgZnVsbCBsb2FkZWQsIHRyaWdnZXIgdGhhdCBjb2RlXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiamF2YXNjcmlwdCBpcyBsb2FkZWRcIik7XG5cbiAgICBsZXQgdGlja2V0cyA9IFtdO1xuICAgIHRpY2tldHMgPSBhd2FpdCBnZXRUaWNrZXRzKCk7XG5cbiAgICAvLyBnZW5lcmF0ZSBIVE1MIGZvciBlYWNoIHRpY2tldCByb3dcbiAgICB0aWNrZXRzLmZvckVhY2godGlja2V0ID0+IHtcbiAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICB0ci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8dGQ+JHt0aWNrZXQuaWR9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ke3RpY2tldC50aXRsZX08L3RkPlxuICAgICAgICAgICAgPHRkPiR7dGlja2V0LmRlc2NyaXB0aW9ufTwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0dXMtbGFiZWwgJHt0aWNrZXQuc3RhdHVzID09PSAnQXNzaWduZWQnID8gJ2Fzc2lnbmVkJyA6ICd1bmFzc2lnbmVkJ31cIj4ke3RpY2tldC5zdGF0dXN9PC9zcGFuPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD4ke3RpY2tldC5hc3NpZ25lZFRvIHx8ICctJ308L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYWN0aW9uLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgb25jbGljaz1cImRlbGV0ZVRpY2tldCgke3RpY2tldC5pZH0pXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIG9uY2xpY2s9XCJhc3NpZ25UaWNrZXQoJHt0aWNrZXQuaWR9KVwiPkFzc2lnbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGJvZHknKS5hcHBlbmRDaGlsZCh0cik7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;