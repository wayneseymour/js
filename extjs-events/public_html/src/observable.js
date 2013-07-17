var Ext = Ext;
Ext.onReady(function(){
    console.log('### hi');
    Ext.define('Employee', {
        extend: 'Ext.util.Observable',
        constructor: function(config){
            this.name = config.name;
            this.addEvents({
                "sayHello" : true,
                "sayGoodbye" : true
            });

            // Copy configured listeners into *this* object so 
            // that the base class's constructor will add them.
            this.listeners = config.listeners;

            // Call our superclass constructor to complete
            // construction process.
            this.callParent(arguments)
        }
    });

    var newEmployee = new Employee({
        name: "Neil",
        listeners: {
            sayHello: function() {
                // By default, "this" will be the object that
                // fired the event.
                console.log(this.name + " says Hello!");
            },
            sayGoodbye: function() {
                console.log(this.name + " says goodbye!");
            }
        }
    });

    // with the custom event defined and listener registered...
    // ...fire it up!
    newEmployee.fireEvent('sayHello');
    newEmployee.fireEvent('sayGoodbye');

});