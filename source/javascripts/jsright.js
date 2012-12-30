$.fn.tableOfContents = function(header) {
  var back_to_top = "<a href='#top'>Back to Top</a>";
  var toc_header = "<h2 class='toc_header'><a name='toc'>Table of Contents</a></h2>";
  var toc_list = "<ul id='toc'></ul>";
  var list_item = [];
  this.append(back_to_top);
  header.after(toc_header);
  header.next('.toc_header').after(toc_list);
  this.find('h2').each(function() {
    var title = $(this).text();
    var slug = title.trim().toLowerCase().replace(" ", "_");
    var target_anchor = "<a name='" + slug + "'/>";
    var toggle_link = $("<a href='#'>(hide)</a>");
    toggle_link.on('click', function (event) {
      $(this).siblings('p').toggle();
      var toggle_text = toggle_link.text();
      var toggle_text_new = (toggle_text === '(hide)') ? '(show)' : '(hide)';
      toggle_link.text(toggle_text_new);    
      event.preventDefault();
    });
    $(this).after(toggle_link);
    $(this).before(target_anchor);
    list_item += "<li><a href='#" + slug + "'>" + title + "</a></li>";
  });
  $("#toc").append(list_item);
};

$(function () {
  $("div.article").tableOfContents($('h1.jsright-header'));
}); 
