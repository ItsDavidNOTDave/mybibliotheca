function bulk_edit_mode(element){
       //   console.log(element)
          if (element.checked){
            $('.bulk_edit_checkbox').each(function(){
              $(this).prop('checked', false);
              $(this).removeClass('hidden_class');
           //   console.log(this);
            });
            document.getElementById('bulk-edit-section').classList.remove('hidden_class');
          }
          else{
            $('.bulk_edit_checkbox').each(function(){
              $(this).prop('checked', false);
              $(this).addClass('hidden_class');
          //    console.log("unchecked");
            });
            document.getElementById('bulk-edit-section').classList.add('hidden_class');
          }
}

document.getElementById('bulk-edit-select').addEventListener('change',function(){
  const bulk_edit_attribute_div = document.getElementById("bulk_edit_attribute");
    var textbox = ['author','publisher','add_category','language'];
    var checkbox = ['want_to_read','library_only','currently_reading'];
    var date=['start_date','finish_date'];
    var selector=['remove_category'];
    var new_element;
    
    
    if (this.value == '')
    {
      console.log("remove Child")
    	new_element = document.createElement("span");
        bulk_edit_attribute_div.replaceChild(new_element,bulk_edit_attribute_div.childNodes[0]);
    }
    else {
      var edit_element_div = document.createElement("div");
      var edit_element_label = document.createElement("label");
      edit_element_label.classList.add("form-label");
      edit_element_label.for="bulk_edit_attribute";
      
      switch (this.value) {
        case "author":
          edit_element_label.innerText = "Set Author";
          new_element = document.createElement("input");
          new_element.type="text";
          new_element.classList.add("form-control");
          break;
        case "publisher":
          edit_element_label.innerText = "Set Publisher";
          new_element = document.createElement("input");
          new_element.type="text";
          new_element.classList.add("form-control");
          break;
        case "start_date":
          edit_element_label.innerText = "Started reading on";
          new_element = document.createElement("input");
          new_element.type="date";
          new_element.classList.add("form-control");
          break;
        case "finish_date":
          edit_element_label.innerText = "Finished reading on";
          new_element = document.createElement("input");
          new_element.type="date";
          new_element.classList.add("form-control");
          break;
        case "add_category":
          edit_element_label.innerText = "Add Category (or multiple by seperating with commas):";
          new_element = document.createElement("input");
          new_element.type="text";
          new_element.classList.add("form-control");
          break;
        case "remove_category":
          edit_element_label.innerText = "Category to Remove";
          new_element = document.createElement("input");
          new_element.classList.add("form-control");
          new_element.setAttribute('list',"datalist_remove_cat");
          new_element.placeholder="Type to Search"
          var datalist_remove_cat = document.createElement("datalist")
          datalist_remove_cat.id="datalist_remove_cat"
          $('#div_category_checkboxes .cat_selection_label ').each(function () {
            var opt_element=document.createElement("option");
            var category = $(this).text();
            opt_element.value= category;
            opt_element.innerText= category;
            datalist_remove_cat.appendChild(opt_element);
          });
          edit_element_div.appendChild(datalist_remove_cat)
          break;
        case "language":
          edit_element_label.innerText = "Set Language";
          new_element = document.createElement("input");
          new_element.type="text";
          new_element.classList.add("form-control");
          break;
        case "want_to_read":
          edit_element_label.innerText = "set all to Want To Read";
          new_element = document.createElement("input");
          new_element.type="checkbox";
          new_element.classList.add("form-check");
          break;
        case "library_only":
          edit_element_label.innerText = "set all to Library Only";
          new_element = document.createElement("input");
          new_element.type="checkbox";
          new_element.classList.add("form-check");
          break;
      }
      new_element.name="bulk_edit_attribute";
      new_element.id="bulk_edit_attribute_id";
      edit_element_div.prepend(edit_element_label,new_element);
      bulk_edit_attribute_div.replaceChild(edit_element_div,bulk_edit_attribute_div.children[0]);
    }
});

