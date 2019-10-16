// Storage Controller


// Item Controller
const ItemCtrl = (function(){
    // Item Constructor
    const Item = function(id, name, calories){
      this.id = id;
      this.name = name;
      this.calories = calories;
    }
  
    // Data Structure / State
    const data = {
      items: [
        /*
          {id: 0, name: 'Steak Dinner', calories: 1200},
          {id: 1, name: 'Cookie', calories: 400},
          {id: 2, name: 'Eggs', calories: 300}
        */
      ],
        currentItem: null,
        totalCalories: 0
    }
  
    // Public methods
    return {
      getItems: function(){
        return data.items;
      },
      addItem: function(name, calories){
        console.log(name, calories); 
        // Create ID
        let ID; 
        if(data.item.length > 0){
          ID = data.items[data.items.length-1].id + 1; 
        } else {
          ID = 0; 
        }

        // Calories to Number
        calories = parseInt(calories); 

        // create new item
        newItem = new Item(ID, name, calories);

        // Add to items Array 
        data.items.push(newItem);
        
        return newItem; 
      }, 
      logData: function(){
        return data;
      }
    }
  })();
  
  
  // UI Controller
  const UICtrl = (function(){
    const UISelectors = {
      itemList: '#item-list', 
      addBtn: '.add-btn', 
      itemNameInput: '#item-name', 
      itemCalorieInput: '#item-calories'
    }
    
    // Public methods
    return {
      populateItemList: function(items){
        let html = '';
  
        items.forEach(function(item){
          html += `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`;
        });
  
        // Insert list items
        document.querySelector(UISelectors.itemList).innerHTML = html;
      }, 

      getItemInput: function(){
        return {
          name: document.querySelector(UISelectors.itemNameInput.value), 
          calories: document.querySelector(UISelectors.itemCalorieInput.value) 
        }
      }, 

      addListItem: function(item){
        // Create li element
        const li = document.createElement('li'); 
        // Add class
        li.className = 'collection-item';
        // Add ID
        li.id = `item-${item.id}`; 
        
        // Add HTML
        li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>`; 

        // Insert item
        document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li); 
      }, 

      clearInput: function(){
        document.querySelector(UISelectors.itemNameInput).value = '';
        document.querySelector(UISelectors.itemCalorieInput).value = '';  
      }, 

      getSelectors: function(){
        return UISelectors; 
      }
    }
  })();
  
  // App Controller
  const App = (function(ItemCtrl, UICtrl){
    // Load event listeners 
    const loadEventListeners = function(){
      // Get UI Selectors
      const UISelectors = UICtrl.getSelectors();
      
      // Add Item event
      document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit); 
    }

    // Add item submit 
    const itemAddSubmit = function(e){
      
      // Get form input from UI controller 
      const input = UICtrl.getItemInput(); 
      
      // check for name and calorie input
      if(input.name !== '' && input.calories !== ''){
        // Add item
        const newItem = ItemCtrl.addItem(input.name, input.calories); 
        //Add item to the UI list
        UICtrl.addListItem(newItem); 

        // clear fields
        UICtrl.clearInput(); 
      }
      
      e.preventDefault(); 
    }
  
    // Public methods
    return {
      init: function(){
        // Fetch items from data structure
        const items = ItemCtrl.getItems();
  
        // Populate list with items
        UICtrl.populateItemList(items);

        // Load event listeners
        loadEventListeners(); 
      }
    }
  })(ItemCtrl, UICtrl);
  
  // Initialize App
  App.init();