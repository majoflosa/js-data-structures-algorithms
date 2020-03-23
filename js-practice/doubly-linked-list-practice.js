const dll = new DoublyLinkedList('Bob');


// = = = = = = = = = = = = = = = = = = = = = = = = = = =
const dllApp = {
    dom: function() {
        this.$list = document.querySelector('.linked-list');

        this.$insertHead = document.querySelector('#insert-head');
        this.$headField = document.querySelector('#head-field');

        this.$insertTail = document.querySelector('#insert-tail');
        this.$tailField = document.querySelector('#tail-field');

        this.$beforeDropdown = document.querySelector('#before-dropdown');
        this.$beforeField = document.querySelector('#before-field');
        this.$insertBefore = document.querySelector('#insert-before');
        
        this.$afterDropdown = document.querySelector('#after-dropdown');
        this.$afterField = document.querySelector('#after-field');
        this.$insertAfter = document.querySelector('#insert-after');
        
        this.$rbeforeDropdown = document.querySelector('#rbefore-dropdown');
        this.$removeBefore = document.querySelector('#remove-before');
        
        this.$rafterDropdown = document.querySelector('#rafter-dropdown');
        this.$removeAfter = document.querySelector('#remove-after');

        this.$removeHead = document.querySelector('#remove-head');
        this.$removeTail = document.querySelector('#remove-tail');

        this.$outputEl = document.querySelector('.output p');
    },

    syncDom: function() {
        this.$list.innerHTML = '';
        this.$beforeDropdown.innerHTML = '';
        this.$afterDropdown.innerHTML = '';
        this.$rbeforeDropdown.innerHTML = '';
        this.$rafterDropdown.innerHTML = '';

        const $blankOption = document.createElement('option');
        $blankOption.innerText = '- Select -';
        this.$beforeDropdown.appendChild($blankOption);

        const $clone1 = $blankOption.cloneNode(true);
        const $clone2 = $blankOption.cloneNode(true);
        const $clone3 = $blankOption.cloneNode(true);
        this.$afterDropdown.appendChild($clone1);
        this.$rbeforeDropdown.appendChild($clone2);
        this.$rafterDropdown.appendChild($clone3);

        dll.forEach((current) => {
            const $el = document.createElement('div');
            $el.className = 'linked-list-item ds-item';
            $el.innerHTML = `
                <small>${current.prev ? ' Prev: ' + current.prev.value : ''}</small>
                &nbsp;
                <strong>${current.value}</strong>
                &nbsp;
                <small>${current.next ? ' Next: ' + current.next.value : ''}</small>
            `;
            this.$list.appendChild($el);

            const $option = document.createElement('option');
            $option.value = current.value;
            $option.innerText = current.value;
            this.$beforeDropdown.appendChild($option);
            
            const $clone1 = $option.cloneNode(true);
            const $clone2 = $option.cloneNode(true);
            const $clone3 = $option.cloneNode(true);
            this.$afterDropdown.appendChild($clone1);
            this.$rbeforeDropdown.appendChild($clone2);
            this.$rafterDropdown.appendChild($clone3);
        });

        // this.$outputEl.innerText = JSON.stringify(dll, );
    },

    bindEvents: function() {
        this.$insertHead.addEventListener('click', e => this.insertAtBeginning(this.$headField.value));
        this.$insertTail.addEventListener('click', e => this.insertAtEnd(this.$tailField.value));
        this.$insertBefore
            .addEventListener('click', e => this.insertBefore(this.$beforeDropdown.value, this.$beforeField.value));
        this.$insertAfter
            .addEventListener('click', e => this.insertAfter(this.$afterDropdown.value, this.$afterField.value));
        this.$removeBefore
            .addEventListener('click', e => this.removeBefore(this.$rbeforeDropdown.value));
        this.$removeAfter
            .addEventListener('click', e => this.removeAfter(this.$rafterDropdown.value));
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

        dll.insertAtBeginning(value);
        this.syncDom();

        this.$headField.value = '';
    },

    insertAtEnd: function(value) {
        if (!value) return;

        dll.insertAtEnd(value);
        this.syncDom();

        this.$tailField.value = '';
    },

    insertBefore: function(nodeValue, value) {
        if (!nodeValue || !value) return;

        const refNode = dll.findNode(nodeValue);
        dll.insertBefore(refNode, value);
        this.syncDom();

        this.$beforeField.value = '';
    },

    insertAfter: function(nodeValue, value) {
        if (!nodeValue || !value) return;

        const refNode = dll.findNode(nodeValue);
        dll.insertAfter(refNode, value);
        this.syncDom();

        this.$afterField.value = '';
    },

    removeBefore: function(nodeValue) {
        if (!nodeValue) return;

        const refNode = dll.findNode(nodeValue);
        dll.removeBefore(refNode);
        this.syncDom();
    },

    removeAfter: function(nodeValue) {
        if (!nodeValue) return;

        const refNode = dll.findNode(nodeValue);
        dll.removeAfter(refNode);
        this.syncDom();
    },

    removeHead: function() {
        dll.removeHead();
        this.syncDom();
    },

    removeTail: function() {
        dll.removeTail();
        this.syncDom();
    }
};
dllApp.init();