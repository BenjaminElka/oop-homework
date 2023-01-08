
class Render{
    constructor(tagName,tagTitle,tagContent,text){
        this.tagName = tagName;
        this.tagTitle = tagTitle;
        this.tagContent =tagContent;
        this.text = text;
    }
    //Method
    // <div class="someClass">text </div>
    //<h1 class="h1"> text </h1>

    //1<tag></tag>
    //2<tag className></tag>
    //2<tag className="someClass"></tag>
    //3<tag className="someClass">lionel</tag>
    //4 you select which id you want to take and under that you putt the tag that you want there
    printObject (){
       const tag = document.createElement(this.tagName);
       tag[this.tagTitle]=this.tagContent; //Content in the html
       tag.innerText =this.text; // text in html
       document.querySelector('#center').appendChild(tag); //center is the id in html(string)appendchild is for the tag that will be inside of him
    }

    addClick(){
        document.querySelector(`${this.tagName}[${this.tagTitle}="${this.tagContent}"]`).addEventListener("click",()=>{
            alert('tag clicked')
        })
    }

}

//let a = 5;
//let b = `tb-${a}-das`

let render = new Render("h1","id","someClass","lionel")
render.printObject(); //always  putt the () to make the function work,

render.addClick();



























// ex 2


class Computer {
    constructor(cpu, screenCard, ram, memoryCard, nameScreen, model) {
      if (cpu !== "AMD" && cpu !== "Intel") {
      }
      if (screenCard !== "Radeon" && screenCard !== "Geforce") {
      }
      this.cpu = cpu;
      this.screenCard = screenCard;
      this.ram = ram;
      this.memoryCard = memoryCard;
      this.nameScreen = nameScreen;
      this.model = model;
    }
  }
  
  class RenderB {
    constructor(computer) {
      // console.log(`model: ${computer.model}, cpu: ${computer.cpu}`)
  
      // selectedDiv.innerText= `${computer.model},${computer.memoryCard}`
      let selectedItem = document.querySelector("#selectedItem");
      selectedDiv.innerText = `${computer.model},${computer.memoryCard}`;
    }
  }
  
  computer = new Computer(
    "Amd",
    "Gforce",
    "4gb",
    "500gb",
    "samsung 85",
    "hp123123"
  );
  computer2 = new Computer("Amd", "Gforce", "4gb", "500gb", "dell 85", "sdfsd");
  computer3 = new Computer("Amd", "Gforce", "4gb", "500gb", "lenovo 85", "rty");
  // renderb = new RenderB(computer);
  
  computers = [computer, computer2, computer3];
  computers.forEach((element) => {
    let mainDiv = document.createElement("div");
    let computerName = document.createElement("span");
    let button = document.createElement("button");
    computerName.innerText = element.model;
    button.innerHTML = "click me ";
    button.addEventListener("click", (e) => {
      let render = new RenderB(element);
    });
    mainDiv.appendChild(computerName);
    mainDiv.appendChild(button);
  
    document.body.appendChild(mainDiv);
  });
  
  let selectedDiv = document.createElement("div");
  selectedDiv.id = "selectedItem";
  document.body.appendChild(selectedDiv);

  