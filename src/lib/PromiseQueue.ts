type Task = () => Promise<string>;

class Queue {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  enqueue(task: Task): void {
    this.tasks.push(task);
  }

  processQueue(): void {
    this.tasks.forEach((task, index) => {
      task().then((response) => {
        console.log(`Task ${index + 1} completed with response: ${response}`);
        this.dequeue(index);
      });
    });
  }

  dequeue(index: number): void {
    this.tasks.splice(index, 1);
  }
}

const queue = new Queue();

// Assuming addToCart is a function that returns a promise
const addToCart = (item: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Added ${item} to cart`);
    }, 60000); // Simulating a 1 minute delay
  });
};

// Event listener for 'Add to Cart' button
// document.querySelector('.add-to-cart-button').addEventListener('click', (event) => {
//     const item = event.target.dataset.item;
//     queue.enqueue(() => addToCart(item));
//     queue.processQueue();
// });
