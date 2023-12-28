class React{
    constructor(){
        this.library = "React";
        this.server = "https://localhost:300"

        // requirement
        // 1. get reference of the button
        // 2. something happens on clicking button

        document.querySelector('button').addEventListener("click", this.handleClick)
    }

    handleClick(){
        console.log(`Button clicked`)
        console.log(this.server)
    }
}

const app = new React()