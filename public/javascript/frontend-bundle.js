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

eval("async function getTickets() {\n    try {\n        const call = await fetch('http://localhost/api/tickets');\n        const data = await call.json();\n        return data;\n    } catch (error) {\n        console.error('Error:', error);\n        return [];\n    }\n}\n\n// when my HTML page is full loaded, trigger that code\ndocument.addEventListener('DOMContentLoaded', async () => {\n    console.log(\"javascript is loaded\");\n\n    let tickets = [];\n    tickets = await getTickets();\n\n    // generate HTML for each ticket row\n    tickets.forEach(ticket => {\n        const tr = document.createElement('tr');\n        tr.innerHTML = `\n            <td>${ticket.id}</td>\n            <td>${ticket.title}</td>\n            <td>${ticket.description}</td>\n            <td>\n                <span class=\"status-label ${ticket.status === 'Assigned' ? 'assigned' : 'unassigned'}\">${ticket.status}</span>\n            </td>\n            <td>${ticket.assignedTo || '-'}</td>\n            <td class=\"action-buttons\">\n                <button class=\"button\" onclick=\"deleteTicket(${ticket.id})\">Delete</button>\n                <button class=\"button\" onclick=\"assignTicket(${ticket.id})\">Assign</button>\n            </td>\n        `;\n        document.querySelector('tbody').appendChild(tr);\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixVQUFVO0FBQzVCLGtCQUFrQixhQUFhO0FBQy9CLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQSw0Q0FBNEMseURBQXlELElBQUksY0FBYztBQUN2SDtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQSwrREFBK0QsVUFBVTtBQUN6RSwrREFBK0QsVUFBVTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcmZlY3QtdGlja2V0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0VGlja2V0cygpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjYWxsID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3QvYXBpL3RpY2tldHMnKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNhbGwuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbi8vIHdoZW4gbXkgSFRNTCBwYWdlIGlzIGZ1bGwgbG9hZGVkLCB0cmlnZ2VyIHRoYXQgY29kZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImphdmFzY3JpcHQgaXMgbG9hZGVkXCIpO1xuXG4gICAgbGV0IHRpY2tldHMgPSBbXTtcbiAgICB0aWNrZXRzID0gYXdhaXQgZ2V0VGlja2V0cygpO1xuXG4gICAgLy8gZ2VuZXJhdGUgSFRNTCBmb3IgZWFjaCB0aWNrZXQgcm93XG4gICAgdGlja2V0cy5mb3JFYWNoKHRpY2tldCA9PiB7XG4gICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgdHIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHRkPiR7dGlja2V0LmlkfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+JHt0aWNrZXQudGl0bGV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ke3RpY2tldC5kZXNjcmlwdGlvbn08L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdHVzLWxhYmVsICR7dGlja2V0LnN0YXR1cyA9PT0gJ0Fzc2lnbmVkJyA/ICdhc3NpZ25lZCcgOiAndW5hc3NpZ25lZCd9XCI+JHt0aWNrZXQuc3RhdHVzfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+JHt0aWNrZXQuYXNzaWduZWRUbyB8fCAnLSd9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFjdGlvbi1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIG9uY2xpY2s9XCJkZWxldGVUaWNrZXQoJHt0aWNrZXQuaWR9KVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBvbmNsaWNrPVwiYXNzaWduVGlja2V0KCR7dGlja2V0LmlkfSlcIj5Bc3NpZ248L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIGA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5JykuYXBwZW5kQ2hpbGQodHIpO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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