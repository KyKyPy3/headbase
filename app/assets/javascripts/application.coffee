notify = (flash_message) ->
  flash_div = $("#flash")
  flash_div.html(flash_message)
  flash_div.fadeIn(400)

  setTimeout(->
    flash_div.fadeOut(500, ->
      flash_div.html("")
      flash_div.hide()
    )
  , 1400)

$(document).ready ->
  $('#navigation a').stop().animate({'marginLeft':'85px'},1000)

  $('#navigation > li').hover(
    ->
      $('a',$(this)).stop().animate({'marginLeft':'10px'},500)
    ->
      $('a',$(this)).stop().animate({'marginLeft':'85px'},200)
  )

  $(".signin").click((e) ->
    e.preventDefault()
    $("fieldset#signin_menu").toggle(150)
    $(".signin").toggleClass("menu-open")
  )

  $("fieldset#signin_menu").mouseup( () ->return false )

  $(document).mouseup( (e) ->
    if $(e.target).parent("a.signin").length==0
      $(".signin").removeClass("menu-open")
      $("fieldset#signin_menu").hide()
  )

  $("#flash").hide()
  # grab flash message from our div
  flash_message = $("#flash").html().trim()
  # call our flash display function
  if flash_message != ""
    notify(flash_message)
