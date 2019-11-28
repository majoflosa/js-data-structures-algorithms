class LinkedList {
    constructor(headValue) {
        this.head = this.createNode(headValue);
        this.tail = this.head;
    }

    createNode(value) {
        return { next: null, value: value };
    }

    forEach(callback) {
        let current = this.head;
        let failSafe = 0;
        while (current !== null) {
            callback(current);
            current = current.next;

            failSafe++;
            if (failSafe > 100) {
                console.log('Loop is too big; exiting loop');
                break;
            }
        }
    }

    findNode(value) {
        let theNode = null;
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                theNode = current;
                break;
            }
            current = current.next;
        }

        return theNode;
    }

    insertAtBeginning(value) {
        const newHead = this.createNode(value);
        const oldHead = this.head;
        newHead.next = oldHead;
        this.head = newHead;

        return this.head;
    }

    insertAtEnd(value) {
        const newTail = this.createNode(value);
        this.tail.next = newTail;
        this.tail = newTail;

        return this.tail;
    }

    insertAfter(refNode, value) {
        const newNode = this.createNode(value);
        newNode.next = refNode.next;
        refNode.next = newNode;

        if (this.tail === refNode) this.tail = newNode;
        
        return newNode;
    }

    removeHead() {
        const removed = this.head;
        delete this.head;
        if (removed.next) {
            this.head = removed.next;
        }

        return removed;
    }

    removeTail() {
        const removed = this.tail;
        delete this.tail;

        let current = this.head;
        while (current !== null) {
            if (current.next === removed) {
                current.next = null;
                this.tail = current;
                break;
            } 
            current = current.next;
        }

        return removed;
    }

    removeAfter(refNode) {
        if (refNode === this.tail) return false;

        const removed = refNode.next;
        let newNext = null;
        if (removed !== this.tail) {
            newNext = removed.next;
        } else {
            this.tail = refNode;
        }
        delete refNode.next;
        refNode.next = newNext;

        return removed;
    }

    print() {
        const result = [];
        this.forEach(node => result.push(node.value));
        
        return result;
    }
}

const linkedList = new LinkedList('Joan');
linkedList.insertAtBeginning('Bob');
linkedList.insertAtEnd('Jane');
linkedList.forEach((current) => console.log(current.value));

const linkedListApp = {
    dom: function() {
        this.$list = document.querySelector('.linked-list');
        this.$insertHead = document.querySelector('#insert-head');
        this.$headField = document.querySelector('#head-field');
        this.$insertTail = document.querySelector('#insert-tail');
        this.$tailField = document.querySelector('#tail-field');
        this.$outputEl = document.querySelector('.output p');
    },
    syncDom: function() {
        this.$list.innerHTML = '';

        linkedList.forEach((current) => {
            const $el = document.createElement('div');
            $el.className = 'linked-list-item ds-item';
            $el.innerHTML = `
                <strong>${current.value}</strong>
                &nbsp;
                <small>${current.next ? ' Next: ' + current.next.value : ''}</small>
            `;
            this.$list.appendChild($el);
        });

        this.$outputEl.innerText = JSON.stringify(linkedList);
    },
    bindEvents: function() {
        this.$insertHead.addEventListener('click', e => this.insertAtBeginning(this.$headField.value));
        this.$insertTail.addEventListener('click', e => this.insertAtEnd(this.$tailField.value));
    },
    init: function() {
        this.dom();
        this.syncDom();
        this.bindEvents();
    },
    insertAtBeginning: function(value) {
        if (!value) return;

        linkedList.insertAtBeginning(value);
        this.syncDom();

        this.$headField.value = '';
    },
    insertAtEnd: function(value) {
        if (!value) return;
        
        linkedList.insertAtEnd(value);
        this.syncDom();

        this.$tailField.value = '';
    },
};

linkedListApp.init();
