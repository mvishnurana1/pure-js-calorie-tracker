// STORAGE controller 



// ITEM controller 
const ItemCtrl = (function(){
    // Item constructor
    const Item = function(id, name, calories){
        this.id = id; 
        this.name = name; 
        this.calories = calories; 

        // Data Structure / State
        const data = {
            items: [
                {id: 0, name: 'steak Dinner', calories: 1200}, 
                {id: 1, name: 'Cookie', calories: 135}, 
                {id: 2, name: 'Eggs', calories: 10}, 
            ], 
            currentItem: null, 
            totalCalories: 0
        }

        // Public Methods
        return {
            getItems: function(){
                return data.items;                 
            }, 

            logData: function(){
                return data; 
            }
        }
    }
})(); 


// UI controller 
const UICtrl = (function(){

})(); 

// App controller 
const App = (function(ItemCtrl, UICtrl){

    // Public Method
    return{
        AppInit: function(){
            console.log('App init!'); 
        }
    }

})(ItemCtrl, UICtrl); 
