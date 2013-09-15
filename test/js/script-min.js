/*
Author: Able Sense Media
Web: ablesense.com
Date of creation: 01/04/2013
*/$(function(){var e=$(".event-handlers .lab button"),t=$(".event-handlers .attach"),n=$(".event-handlers .detach");t.on("click",function(){e.on("click",function(){console.log("Button was pressed.")});e.val("Button that does something");console.log("Event Attached")});n.on("click",function(){e.off("click");e.val("Button that doesn't do anything");console.log("Event Detached")});var r=$(".class-handlers p"),i=$(".class-handlers input[name=color]"),s=$(".class-handlers .add"),o=$(".class-handlers .remove"),u=$(".class-handlers .toggle"),a=$(".class-handlers .has");s.on("click",function(){r.addClass(i.val());var e="";r.each(function(t){e+=" "+t.className});console.log("Paragraph class: "+e)});o.on("click",function(){r.removeClass(i.val());var e="";r.each(function(t){e+=" "+t.className});console.log("Paragraph class: "+e)});u.on("click",function(){r.toggleClass(i.val());var e="";r.each(function(t){e+=" "+t.className});console.log("Paragraph class: "+e)});a.on("click",function(){r.hasClass(i.val())?console.log('Yes, the paragraph has the "'+i.val()+'" class.'):console.log('No, the paragraph does not have the "'+i.val()+'" class.')});var f=$(".traversing .source"),l=$(".traversing .next"),c=$(".traversing .previous"),h=$(".traversing .siblings"),p=$(".traversing .parent"),d=$(".traversing .children");l.on("click",function(){f.next().addClass("highlighted");console.log("Next Element Highlighted")});c.on("click",function(){f.prev().addClass("highlighted");console.log("Previous Element Highlighted")});h.on("click",function(){f.siblings().addClass("highlighted");console.log("Sibling Elements Highlighted")});p.on("click",function(){f.parent().addClass("highlighted");console.log("Parent Element Highlighted")});d.on("click",function(){f.children().addClass("highlighted");console.log("Child Elements Highlighted")});var v=$(".filtering .lab li"),m=$(".filtering .first"),g=$(".filtering .last");m.on("click",function(){v=$(".filtering .lab li").removeClass("highlighted");v.first().addClass("highlighted");console.log("First Element Highlighted")});g.on("click",function(){v=$(".filtering .lab li").removeClass("highlighted");v.last().addClass("highlighted");console.log("Last Element Highlighted")});var y=null,b=$(".finding .makeselection"),w=$(".finding .spans"),E=$(".finding .redspans");b.on("click",function(){y=$(".finding .lab div");console.log("Grabbed the divs")});w.on("click",function(){y.find("span").addClass("highlighted");console.log("Spans in divs Highlighted")});E.on("click",function(){y.find("span.red").addClass("highlighted");console.log("Red spans in divs Highlighted")});var S=$(".creation .lab"),x=$(".creation .createa"),T=$(".creation .createinput");x.on("click",function(){var e=$('<a href="http://google.com/">Test link to google</a>');S.append(e);console.log("link created")});T.on("click",function(){var e=$('<input type="text" value="testbox" />');S.append(e);console.log("input created")});var N=$(".cloning .subject"),C=$(".cloning .lab"),k=$(".cloning .clone"),L=$(".cloning .clonedeep");k.on("click",function(){var e=N.clone(!1);e.addClass("highlighted");C.append(e);console.log("Elements cloned")});L.on("click",function(){var e=N.clone();e.addClass("highlighted");C.append(e);console.log("Elements cloned deep")});var A=document.createElement("li"),O=document.createTextNode("New list item"),M=null,_=$(".append .lab ul"),D=$(".append .appendli"),P=$(".append .prependli");A.appendChild(O);M=$(A);D.on("click",function(){var e=M.clone();_.append(e);console.log("Li inserted at end of ul")});P.on("click",function(){var e=M.clone();_.prepend(e);console.log("Li inserted at beginning of ul")});var H=$(".empty .lab"),B=$(".empty .emptyp"),j=$(".empty .emptylab");B.on("click",function(){H.find("p").empty();console.log("paragraph was emptied")});j.on("click",function(){H.empty();console.log("Lab area was emptied")});var F=$(".remove .lab"),I=$(".remove .removep"),q=$(".remove .removeoddlis");q.on("click",function(){F.find("li").filter("odd").remove();console.log("Odd list items were removed")});I.on("click",function(){F.find("p").remove();console.log("paragraph was removed")});var R=$(".html .lab"),U=$(".html .newli"),z=$(".html .gethtml");U.on("click",function(){var e="<li>1</li><li>2</li><li>3</li><li>4</li>";R.find("ul").html(e);console.log("list items were changed")});z.on("click",function(){var e=R.find("p a").html();console.log("paragraph link html: "+e)});var W=$(".attr .lab"),X=$(".attr .setvalue"),V=$(".attr .disableall"),J=$(".attr .enable"),K=$(".attr .getemail");X.on("click",function(){W.find("input:first-child").attr("value","Kitten");console.log("New value of first box set")});V.on("click",function(){W.find("input").attr("disabled","true");console.log("All boxes disabled")});J.on("click",function(){W.find("input").removeAttr("disabled");console.log("All boxes enabled")});K.on("click",function(){var e=W.find('input[type="email').attr("value");console.log("The email address in the email box: "+e)});var Q=$(".val .lab *"),G=$("#testform"),Y=$(".val .setvalues"),Z=$(".val .getvalues");Y.on("click",function(){G.find("#tomatoes").attr("checked",!0);G.find("#checky").attr("checked",!0);G.find("#name").val("Glenn Naessens");G.find("#email").val("hello@glennnaessens.com");G.find("#password").val("hardtoguess");G.find("#testselect").val(3);G.find("#submit").val("Submitted")});Z.on("click",function(){console.log(Q.val())})});