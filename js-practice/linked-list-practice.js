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
        this.$afterDropdown = document.querySelector('#after-dropdown');
        this.$afterField = document.querySelector('#after-field');
        this.$insertAfter = document.querySelector('#insert-after');
        this.$removeHead = document.querySelector('#remove-head');
        this.$removeTail = document.querySelector('#remove-tail');
        this.$outputEl = document.querySelector('.output p');
    },
    syncDom: function() {
        this.$list.innerHTML = '';
        this.$afterDropdown.innerHTML = '';
        
        const $blankOption = document.createElement('option');
        $blankOption.innerText = '- Select -';
        this.$afterDropdown.appendChild($blankOption);

        linkedList.forEach((current) => {
            const $el = document.createElement('div');
            $el.className = 'linked-list-item ds-item';
            $el.innerHTML = `
                <strong>${current.value}</strong>
                &nbsp;
                <small>${current.next ? ' Next: ' + current.next.value : ''}</small>
            `;
            this.$list.appendChild($el);

            const $option = document.createElement('option');
            $option.setAttribute('value', current.value);
            $option.innerText = current.value;
            
            this.$afterDropdown.appendChild($option);
        });

        this.$outputEl.innerText = JSON.stringify(linkedList);
    },
    bindEvents: function() {
        this.$insertHead.addEventListener('click', e => this.insertAtBeginning(this.$headField.value));
        this.$insertTail.addEventListener('click', e => this.insertAtEnd(this.$tailField.value));
        this.$insertAfter
            .addEventListener('click', e => this.insertAfter(this.$afterDropdown.value, this.$afterField.value));
        this.$removeHead.addEventListener('click', e => this.removeHead());
        this.$removeTail.addEventListener('click', e => this.removeTail());
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
    insertAfter: function(nodeValue, value) {
        if (!nodeValue || !value) return;

        const refNode = linkedList.findNode(nodeValue);
        linkedList.insertAfter(refNode, value);
        this.syncDom();

        this.$afterField.value = '';
    },
    removeHead: function() {
        linkedList.removeHead();
        this.syncDom();
    },
    removeTail: function() {
        linkedList.removeTail();
        this.syncDom();
    }
};

linkedListApp.init();
