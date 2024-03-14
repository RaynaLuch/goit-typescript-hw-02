/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Titleable {
  title: string;
}

class Component<T extends Titleable> {
  constructor(public props: T) {}
}

class Page extends Component<Titleable> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
