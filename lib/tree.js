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
