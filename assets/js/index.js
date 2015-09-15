//'use strict';
(function ($, window, document) {

    TodoList = {

        init : function() {
            this.setVariables();

            this.bindEvents();

            this.addTasksHandleBars();
        },

        setVariables : function () {
            this.$document = $(document);
            this.taskList = JSON.parse(localStorage.getItem('taskList')) || []
        },

        bindEvents: function () {

            /** 
             * the following 4 event bindings are to ensure consistency when swithcing between
             * keyboard and mouse
             */
            TodoList.$document.on('mouseenter', '.checkbox-label', function (event) {
                $(this).find('.icon-checkmark').addClass('icon-checkmark-show');
                $(this).find('.checkbox').focus();
            })
            .on('mouseleave', '.checkbox-label', function (event) {
                $(this).find('.icon-checkmark').removeClass('icon-checkmark-show');
                $(this).find('.checkbox').blur();
            })
            .on('focus', '.checkbox', function (event) {
                $(this).next('.icon-checkmark').addClass('icon-checkmark-show');
            })
            .on('focusout', '.checkbox', function (event) {
                $(this).next('.icon-checkmark').removeClass('icon-checkmark-show');
            })
            // adding a task
            .on('click', '.js-add-task', function (event) {
                if(TodoList.storageAvailable('localStorage')) {
                    var task = $('.js-task-input ').val();

                    if(!task) {
                        return;
                    }

                    TodoList.taskList.push(task);

                    localStorage.setItem('taskList', JSON.stringify(TodoList.taskList));

                } 

                TodoList.addTasksHandleBars();

            })
            // deleting a task
            .on('click', '.js-checkbox', function () {
                var key = $(this).attr('id');
                
                TodoList.taskList.splice(key, 1);

                localStorage.setItem('taskList', JSON.stringify(TodoList.taskList));

                TodoList.addTasksHandleBars();
            });

        },

        // taken from https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
        storageAvailable: function (type) {
            try {
                var storage = window[type],
                    x = '__storage_test__';
                storage.setItem(x, x);
                storage.removeItem(x);
                return true;
            }
            catch(e) {
                return false;
            }
        },

        // generating handlebars template
        addTasksHandleBars: function() {
            var source = $("#tasks").html(),
                template = Handlebars.compile(source),
                data = JSON.parse(localStorage.getItem('taskList'));

            $("#task-list").html(template(data));
        }

    }

    TodoList.init();
})(jQuery, window, document);