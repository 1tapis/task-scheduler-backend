class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class TaskList {
    constructor() {
        this.head = null;
    }

    addTask(task) {
        const newNode = new Node(task);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeTask(id) {
        if (!this.head) return;
        if (this.head.data.id === id) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.data.id !== id) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }

    updateTask(id, updatedData) {
        let current = this.head;
        while (current) {
            if (current.data.id === id) {
                current.data = { ...current.data, ...updatedData };
                return;
            }
            current = current.next;
        }
    }

    toArray() {
        const tasks = [];
        let current = this.head;
        while (current) {
            tasks.push(current.data);
            current = current.next;
        }
        return tasks;
    }
}

module.exports = TaskList;
