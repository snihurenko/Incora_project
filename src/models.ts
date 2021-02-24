interface App {
  name: string;
  setName(name: string): void;
  projects: Project[];
  addProject(project: Project): void;
};

interface Project {
  tasks: Task[];
  addTask(task: Task): void;
  editTask(task: Partial<Task>): void;
  deleteTask(id: number): void;
  getTotalTime(): number;
  getAllTasksByDeveloper(id: number): Task[];
};

interface Task {
  id: number;
  durationInMin: number;
  completed: boolean;
  developer: User;
  title: string;
  getInfo(): string;
};

interface User {
  id: number;
  name: string;
};

class IApp implements App {
  public projects: Project[] = [];
  constructor(
    public name: string,
  ){}
  setName(name: string){
    this.name = name;
  }
  addProject(project: Project){

  }
};

class IProject implements Project {
  public tasks: Task[] = [];

  addTask(task: Task){
    this.tasks.push(task);
  }
  editTask(task: Partial<Task>){

  }
  deleteTask(id: number){
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
  getTotalTime(){
    let time = 0;
    this.tasks.forEach(task => time += task.durationInMin)
    return time;
  }
  getAllTasksByDeveloper(id: number){

  }
};

class ITask implements Task {
  constructor(
    public id: number,
    public durationInMin: number,
    public completed: boolean,
    public developer: User,
    public title: string
  ){}
  getInfo(){
    return `${this.id} ${this.title} ${this.completed}`;
  }
};

class IUser implements User {
  constructor(
    public id: number,
    public name: string
  ){}
};


export {};
