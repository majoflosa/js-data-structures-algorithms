class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    insertNode(value) {
        const newTree = new Tree(value);
        this.children.push(newTree);

        return newTree;
    }

    removeNode() {

    }
}

// node constructor
    // this.value
    // this.children = [];

// constructor function, takes value
    // new Node(value)
    // set root, node

// Add node (value)
    // create node from value
    // ?

class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(value) {
        const child = new Tree(value);
        this.children.push(child);

        return child;
    }
}