/*
 *This file is created by Narayan Sarkar
 *On 02/02/2016
 *For icluding html content within a html file
 *Need jquery
 *EXAMPLE: <div class="include-file" data-ns-include="other.html" data-ns-content="desktop-menu-bar"></div>
 *Must have use include-file class and data-ns-include attr whic will be the target file that you want to include
 *use data-ns-content to  load a specific content from a doument placing the element id
 */
var file, elem_id;
$(function(){
   'use strict';
   if($("body").find("include-file"))
   {
      $(".include-file").each(function(){
         file = $(this).attr('data-ns-include');
         elem_id = $(this).attr('data-ns-content');
         if (elem_id != "" || elem_id != "undefined")
         {
            $(this).load(file+' #'+elem_id, function( response, status, xhr ) {
               if ( status == "error" ) {
                  //var msg = "Sorry but there was an error: ";
                  //$( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
               }
               }
            );
         }
         else{
            $(this).load(file, function( response, status, xhr ) {
               if ( status == "error" ) {
                  //var msg = "Sorry but there was an error: ";
                  //$( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
               }}
            );
         }
      });
   }
});
