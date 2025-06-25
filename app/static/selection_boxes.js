/* Add new Selection boxes.  Each requires set functions.
This is the base template but needs to be edited by changing ____NAME____ with the proper name (i.e. categories)


//Some times the list box closes when typing in an option
//  for each copy just do a replace of ____NAME____ with name.  (i.e. if the name of the selector should be categories, use ____NAME____ with categories)
var ____NAME_____div_select_area = document.getElementById("div_____NAME_____select_area");
var ____NAME_____checkboxes = document.getElementById("div_____NAME_____checkboxes");
____NAME_____checkboxes.classList.add('hidden_class'); //default to hidden
____NAME_____div_select_area.addEventListener('click',function(){____NAME_____checkboxes.classList.remove('hidden_class');});
____NAME_____div_select_area.addEventListener('mouseleave',function(){____NAME_____checkboxes.classList.add('hidden_class');});


document.getElementById("____NAME_____selection_search").addEventListener('keyup',function(){
//loop through each checkbox and check if it's label contains this.value
	var search_string = this.value.toUpperCase();
	$('#div_____NAME_____checkboxes .cat_selection_label ').each(function () {
		(!$(this).text().toUpperCase().includes(search_string) ? $(this).addClass('hidden_class') : $(this).removeClass('hidden_class'));
	});
});

$('#div_____NAME_____checkboxes :checkbox').change(function () {
    ($(this).is(':checked') ? ____NAME_____add_Selection(this.id) :	Remove_Selection(this.id));	
});

function ____NAME_____Remove_Selection(id){
	document.getElementById(id).checked=false;
	document.getElementById('____NAME_____selected_option_'+id).remove();
}

function ____NAME_____add_Selection(id){
	var new_text = $('label[for="'+id+'"]').text();
	const new_div = document.createElement('div');
	new_div.innerHTML = new_text + ' <span onclick="____NAME_____Remove_Selection(`'+id+'`)">X</span>';
	new_div.id="____NAME_____selected_option_"+id;
	new_div.classList.add("selected_option");
	document.getElementById('div_____NAME_____selected_options').appendChild(new_div);
}

//OnLoad determine which are checked.
$('#div_____NAME_____checkboxes :checkbox').each(function () {
    ($(this).is(':checked') ? ____NAME_____add_Selection(this.id) : '');
});

---END of template */

var category_div_select_area = document.getElementById("div_category_select_area");
var category_checkboxes = document.getElementById("div_category_checkboxes");
category_checkboxes.classList.add('hidden_class'); //default to hidden
category_div_select_area.addEventListener('click',function(){category_checkboxes.classList.remove('hidden_class');});
category_div_select_area.addEventListener('mouseleave',function(){category_checkboxes.classList.add('hidden_class');});


document.getElementById("category_selection_search").addEventListener('keyup',function(){
//loop through each checkbox and check if it's label contains this.value
	var search_string = this.value.toUpperCase();
	$('#div_category_checkboxes .cat_selection_label ').each(function () {
		(!$(this).text().toUpperCase().includes(search_string) ? $(this).addClass('hidden_class') : $(this).removeClass('hidden_class'));
	});
});

$('#div_category_checkboxes :checkbox').change(function () {
    ($(this).is(':checked') ? category_add_Selection(this.id) :	category_Remove_Selection(this.id));	
});

function category_Remove_Selection(id){
	document.getElementById(id).checked=false;
	document.getElementById('category_selected_option_'+id).remove();
}

function category_add_Selection(id){
	var new_text = $('label[for="'+id+'"]').text();
	const new_div = document.createElement('div');
	new_div.innerHTML = new_text + ' <span onclick="category_Remove_Selection(`'+id+'`)">X</span>';
	new_div.id="category_selected_option_"+id;
	new_div.classList.add("selected_option");
	document.getElementById('div_category_selected_options').appendChild(new_div);
}

//OnLoad determine which are checked.
$('#div_category_checkboxes :checkbox').each(function () {
    ($(this).is(':checked') ? category_add_Selection(this.id) : '');
});

var publisher_div_select_area = document.getElementById("div_publisher_select_area");
var publisher_checkboxes = document.getElementById("div_publisher_checkboxes");
publisher_checkboxes.classList.add('hidden_class'); //default to hidden
publisher_div_select_area.addEventListener('click',function(){publisher_checkboxes.classList.remove('hidden_class');});
publisher_div_select_area.addEventListener('mouseleave',function(){publisher_checkboxes.classList.add('hidden_class');});


document.getElementById("publisher_selection_search").addEventListener('keyup',function(){
//loop through each checkbox and check if it's label contains this.value
	var search_string = this.value.toUpperCase();
	$('#div_publisher_checkboxes .cat_selection_label ').each(function () {
		(!$(this).text().toUpperCase().includes(search_string) ? $(this).addClass('hidden_class') : $(this).removeClass('hidden_class'));
	});
});

$('#div_publisher_checkboxes :checkbox').change(function () {
    ($(this).is(':checked') ? publisher_add_Selection(this.id) :	publisher_Remove_Selection(this.id));	
});

function publisher_Remove_Selection(id){
	document.getElementById(id).checked=false;
	document.getElementById('publisher_selected_option_'+id).remove();
}

function publisher_add_Selection(id){
	var new_text = $('label[for="'+id+'"]').text();
	const new_div = document.createElement('div');
	new_div.innerHTML = new_text + ' <span onclick="publisher_Remove_Selection(`'+id+'`)">X</span>';
	new_div.id="publisher_selected_option_"+id;
	new_div.classList.add("selected_option");
	document.getElementById('div_publisher_selected_options').appendChild(new_div);
}

//OnLoad determine which are checked.
$('#div_publisher_checkboxes :checkbox').each(function () {
    ($(this).is(':checked') ? publisher_add_Selection(this.id) : '');
});

var language_div_select_area = document.getElementById("div_language_select_area");
var language_checkboxes = document.getElementById("div_language_checkboxes");
language_checkboxes.classList.add('hidden_class'); //default to hidden
language_div_select_area.addEventListener('click',function(){language_checkboxes.classList.remove('hidden_class');});
language_div_select_area.addEventListener('mouseleave',function(){language_checkboxes.classList.add('hidden_class');});


document.getElementById("language_selection_search").addEventListener('keyup',function(){
//loop through each checkbox and check if it's label contains this.value
	var search_string = this.value.toUpperCase();
	$('#div_language_checkboxes .cat_selection_label ').each(function () {
		(!$(this).text().toUpperCase().includes(search_string) ? $(this).addClass('hidden_class') : $(this).removeClass('hidden_class'));
	});
});

$('#div_language_checkboxes :checkbox').change(function () {
    ($(this).is(':checked') ? language_add_Selection(this.id) :	language_Remove_Selection(this.id));	
});

function language_Remove_Selection(id){
	document.getElementById(id).checked=false;
	document.getElementById('language_selected_option_'+id).remove();
}

function language_add_Selection(id){
	var new_text = $('label[for="'+id+'"]').text();
	const new_div = document.createElement('div');
	new_div.innerHTML = new_text + ' <span onclick="language_Remove_Selection(`'+id+'`)">X</span>';
	new_div.id="language_selected_option_"+id;
	new_div.classList.add("selected_option");
	document.getElementById('div_language_selected_options').appendChild(new_div);
}

//OnLoad determine which are checked.
$('#div_language_checkboxes :checkbox').each(function () {
    ($(this).is(':checked') ? language_add_Selection(this.id) : '');
});