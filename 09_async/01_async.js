/*
    -> Javascript (Default)
        - Synchronous
        - Single threaded

    JS Engine (V8 engine written in C++) is used as an runtime environment either by browser or nodejs

    -> Execution Context
        - execute one line of code at a time

        - console log -> 1           // Each operation waits for the last one
        - console log -> 2              to complete before executing            

        Call Stack    Memory Heap

        Blocking Code vs Non Blocking Code
        - Blocking Code: Code that stops everything until it finishes. 
        Ex: alert, confirm and prompt dialogs, Read File Sync in Nodejs

        - Non Blocking Code : Code that does not blocks execution.
        Ex : async await, promises, Read File Async


        !Event Loop
        - If there is some code where they are running setTimeout/setInterval so it is called and it is transferred to web api/node api
        
        - now fetch() api uses high priority Queue/promise Queue
        normal web api/node api such as setTimeout, setInterval has a register callback which keeps the registeration of the async tasks time taken and all basically registering events for us

        - now we need to send the callback of the async func as the activity will happen/happens so it is kept inside task queue (LIFO) and it waits for the Call Stack to get empty and once empty it will add it to the Call Stack (FIFO).
*/

console.log(0)
setTimeout(() => console.log(1), 0)
console.log(2)

// This will give output as 0,2,1 as setTimeout is an async func so it will go as call to the web api then register callback as it contains the info of the events and all so then it will be transferred to the task queue (callback func inside the setTimeout) then waits for the Call Stack to gets empty and once empty it will push those callback funcs to the Call Stack and Call Stack will execute them one by one.