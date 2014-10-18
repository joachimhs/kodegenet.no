Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("controller.settings.logo")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                ");
  return buffer;
  }

  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "header", options) : helperMissing.call(depth0, "render", "header", options))));
  data.buffer.push("\n\n<div id=\"mainArea\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<footer>\n    <div class=\"pageContent\">\n        <div class=\"row\">\n            <div class=\"col-md-2 col-md-offset-4\">\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("a")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            <div class=\"col-md-4 col-md-offset-1 footerText\" style=\"text-align: right;\">\n                Copyright 2014 <a href=\"http://haagen-software.no\">Haagen Software AS</a>\n            </div>\n        </div>\n    </div>\n</footer>");
  return buffer;
  
});

Ember.TEMPLATES["chapter-menu-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <span class=\"glyphicon glyphicon-book\" style=\"margin-right: 5px;\"></span><div class=\"list-group-text\">");
  stack1 = helpers._triageMustache.call(depth0, "chapter.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    ");
  stack1 = helpers['if'].call(depth0, "view.isSelected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n        <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\n    ");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n        <span class=\"glyphicon glyphicon-chevron-right pull-right\"></span>\n    ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers.each.call(depth0, "oppgave", "in", "chapter.subchapters", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("oppgave.anchorid")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"list-group-item\">\n            <span style=\"margin-left: 15px\">\n                <span class=\"glyphicon glyphicon-signal\"></span> <div class=\"list-group-text\">");
  stack1 = helpers._triageMustache.call(depth0, "oppgave.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n            </span>\n            <span class=\"glyphicon glyphicon-chevron-right pull-right\" style=\"margin-right: 10px;\"></span>\n        </a>\n    ");
  return buffer;
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("list-group-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "chapter", "chapter", options) : helperMissing.call(depth0, "link-to", "chapter", "chapter", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "view.isSelected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["chapter"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["chapter/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers.view.call(depth0, "Ember.View", {hash:{
    'class': ("well slidesBox"),
    'classBinding': ("visSlides")
  },hashTypes:{'class': "STRING",'classBinding': "STRING"},hashContexts:{'class': depth0,'classBinding': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <p>Dette kapittelet inneholder lysbilder. Lysbildene er ment for deg som ønsker å holde et programmeringskurs basert på dette kurset. Lysbildene gir et raskt overblikk over innholdet i kapittelet. Du kan velge å se lysbildene inkludert på denne siden, eller åpne lysbildene i et eget vindu.</p>\n                ");
  stack1 = helpers['if'].call(depth0, "visSlides", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "skjulSlidesAction", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"glyphicon glyphicon-chevron-right\"></span> Skjul Lysbilder</button>\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Kodegenet.RevealFrameView", {hash:{
    'src': ("slideUrl")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "visSlidesAction", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"glyphicon glyphicon-chevron-left\"></span> Vis Lysbilder</button>\n                    <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("slideUrl")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\" class=\"btn btn-default\">Åpne Lysbilder i eget vindu <span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['render-subchapter'] || (depth0 && depth0['render-subchapter']),options={hash:{
    'subchapter': ("subchapter"),
    'kapittel': ("kapittel")
  },hashTypes:{'subchapter': "ID",'kapittel': "ID"},hashContexts:{'subchapter': depth0,'kapittel': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "render-subchapter", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("<div class=\"kapittelHeader\">\n    <div class=\"pageContent\">\n        <div class=\"kapittelNummer\">");
  stack1 = helpers._triageMustache.call(depth0, "kapittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n\n<div class=\"pageContent\">\n    ");
  stack1 = helpers['if'].call(depth0, "slides", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
  data.buffer.push("\n</div>\n\n");
  stack1 = helpers.each.call(depth0, "subchapter", "in", "sortedSubchapters", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["chapter/oppgave"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/render-subchapter"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"well screencast\">\n            <p>Dette delkapittelet inneholder video. Videoene demonstrerer innholdet i delkapittelet, og vil dermed ikke gå utover delkapittelets innhold.</p>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "subchapter.screencastbox", options) : helperMissing.call(depth0, "markdown", "subchapter.screencastbox", options))));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

  data.buffer.push("<a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("subchapter.id")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></a>\n\n<div class=\"kapittelHeader\">\n    <div class=\"pageContent\">\n        <div class=\"kapittelNummer\">");
  stack1 = helpers._triageMustache.call(depth0, "kapittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(".");
  stack1 = helpers._triageMustache.call(depth0, "subchapter.kapittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "subchapter.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n\n<div class=\"pageContent\">\n    ");
  stack1 = helpers['if'].call(depth0, "subchapter.screencastbox", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "subchapter.content", options) : helperMissing.call(depth0, "markdown", "subchapter.content", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/social-buttons"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/test-component"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div>TEST COMPONENT!!</div>");
  
});

Ember.TEMPLATES["course"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<img src=\"/images/kodegenet_logo_black.png\" id=\"logoImageSmall\" class=\"hidden\" />");
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <span class=\"glyphicon glyphicon-arrow-left\" style=\"color: #000; font-size: 18px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectChapter", "prevChapter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("></span>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n            <span class=\"glyphicon glyphicon-arrow-left\" style=\"color: #999; font-size: 18px;\"></span>\n        ");
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <span class=\"glyphicon glyphicon-arrow-right\" style=\"color: #000; font-size: 18px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectChapter", "nextChapter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("></span>\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n            <span class=\"glyphicon glyphicon-arrow-right\" style=\"color: #999; font-size: 18px;\"></span>\n        ");
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers._triageMustache.call(depth0, "controllers.chapter.chapterTittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers._triageMustache.call(depth0, "controller.settings.chooseChapter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <span class=\"glyphicon glyphicon-chevron-right\"></span>\n\n            <button class=\"btn btn-default chooseSubchapterButton submenubutton\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleSubchapterPopover", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                <span class=\"glyphicon glyphicon-tag\"></span>\n                ");
  stack1 = helpers['if'].call(depth0, "selectedSubchapter.oppgaveTittel", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </button>\n        ");
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "selectedSubchapter.oppgaveTittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "controller.settings.chooseSubchapter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "course.visible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectCourse", "course", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"submenuLink\">\n                        <span class=\"glyphicon glyphicon-book\"></span> ");
  stack1 = helpers._triageMustache.call(depth0, "course.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                ");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectChapter", "chapter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"submenuLink\">\n                    <span class=\"glyphicon glyphicon-th-list\"></span> ");
  stack1 = helpers._triageMustache.call(depth0, "chapter.chapterTittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            ");
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "scrollToSubchapter", "subchapter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"submenuLink\">\n                    <span class=\"glyphicon glyphicon-tag\"></span> ");
  stack1 = helpers._triageMustache.call(depth0, "subchapter.oppgaveTittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            ");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <div class=\"well submenuContent\">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "submenuContent", options) : helperMissing.call(depth0, "markdown", "submenuContent", options))));
  data.buffer.push("\n                </div>\n            ");
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <div align=\"center\">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller.settings.adsenseLeaderboard", options) : helperMissing.call(depth0, "markdown", "controller.settings.adsenseLeaderboard", options))));
  data.buffer.push("\n                </div>\n            ");
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("largeImage")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"large_course_img\" />\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"headerIntroArea\">\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n    <div class=\"introText\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "intro", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n\n<div class=\"submenu\" id=\"submenu\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <div class=\"pageContent\">\n        ");
  stack1 = helpers['if'].call(depth0, "controller.prevChapter", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "controller.nextChapter", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <button class=\"btn btn-default chooseCourseButton submenubutton\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleCoursePopover", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            <span class=\"glyphicon glyphicon-book\"></span>\n            ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </button>\n\n        <span class=\"glyphicon glyphicon-chevron-right\"></span>\n\n        <button class=\"btn btn-default chooseChapterButton submenubutton\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleChapterPopover", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            <span class=\"glyphicon glyphicon-th-list\"></span>\n            ");
  stack1 = helpers['if'].call(depth0, "controllers.chapter.chapterTittel", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </button>\n\n        ");
  stack1 = helpers['if'].call(depth0, "controllers.chapter.model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div id=\"coursePopover\" class=\"pop popnomore coursePopover\">\n            ");
  stack1 = helpers.each.call(depth0, "course", "in", "controllers.courses.model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        <div id=\"chapterPopover\" class=\"pop popnomore chapterPopover\">\n            ");
  stack1 = helpers.each.call(depth0, "chapter", "in", "sortedChapters", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        <div id=\"subchapterPopover\" class=\"pop popnomore subchapterPopover\">\n            ");
  stack1 = helpers.each.call(depth0, "subchapter", "in", "controller.controllers.chapter.subchapters", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        ");
  data.buffer.push(escapeExpression((helper = helpers['social-buttons'] || (depth0 && depth0['social-buttons']),options={hash:{
    'model': ("controller.controllers.chapter.model")
  },hashTypes:{'model': "ID"},hashContexts:{'model': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "social-buttons", options))));
  data.buffer.push("\n\n    </div>\n</div>\n\n<div class=\"courseContent\">\n    <div class=\"row\">\n        <div class=\"col-lg-5 col-lg-offset-7 col-md-7 col-md-offset-4\">\n            ");
  stack1 = helpers['if'].call(depth0, "submenuContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        <div class=\"pageContent\">\n            ");
  stack1 = helpers['if'].call(depth0, "controller.settings.adsenseLeaderboard", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = helpers['if'].call(depth0, "largeImage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(31, program31, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        <div class=\"col-md-12 chapterContentArea\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["course/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <h1>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "chapter", "chapter", options) : helperMissing.call(depth0, "link-to", "chapter", "chapter", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n        <table class=\"subchapterBox\">\n        <tbody>\n        ");
  stack1 = helpers.each.call(depth0, "subchapter", "in", "chapter.sortedSubchapters", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </tbody>\n        </table>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "chapter.kapittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "chapter.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <tr>\n                <td class=\"numberCell\">\n                    <a =\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "navigateToSubchapter", "chapter", "subchapter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data})));
  data.buffer.push(" class=\"pointer\">\n                        <div class=\"oppgavekapittelBox\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "chapter.kapittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(".");
  stack1 = helpers._triageMustache.call(depth0, "subchapter.kapittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                    </a>\n                </td>\n                <td>\n                    <a =\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "navigateToSubchapter", "chapter", "subchapter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data})));
  data.buffer.push(" class=\"pointer\">\n                        <h2>");
  stack1 = helpers._triageMustache.call(depth0, "subchapter.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n                        <div class=\"oneliner\">");
  stack1 = helpers._triageMustache.call(depth0, "subchapter.oneliner", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                    </a>\n                </td>\n            </tr>\n        ");
  return buffer;
  }

  data.buffer.push("\n\n\n<div class=\"chapterIntro pageContent\">\n\n    ");
  stack1 = helpers.each.call(depth0, "chapter", "in", "sortedChapters", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["course_old"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                <button class=\"btn btn-default form-control\">\n                    Tilbake til Kursoversikten <span class=\"glyphicon glyphicon-chevron-up pull-right\"></span>\n                </button>\n            ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <button class=\"btn btn-default form-control\">\n                    Tilbake til ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"glyphicon glyphicon-chevron-up pull-right\"></span>\n                </button>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Kodegenet.ChapterMenuItemView", {hash:{
    'chapter': ("chapter")
  },hashTypes:{'chapter': "ID"},hashContexts:{'chapter': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"pageContent\">\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "courses", options) : helperMissing.call(depth0, "link-to", "courses", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "course", "", options) : helperMissing.call(depth0, "link-to", "course", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n            <h1>Kapitler:</h1>\n            <div class=\"list-group\">\n                ");
  stack1 = helpers.each.call(depth0, "chapter", "in", "chapters", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n\n            ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "submenuContent", options) : helperMissing.call(depth0, "markdown", "submenuContent", options))));
  data.buffer.push("\n        </div>\n\n        <div class=\"col-md-9\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["courses"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"mediumBottomPadding\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["courses/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "course.visible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                <div class=\"col-md-12\">\n                    <div>\n                        <h1>\n                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "course", "course", options) : helperMissing.call(depth0, "link-to", "course", "course", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </h1>\n                    </div>\n                    <div class=\"courseIntroBoxContent\">\n                        <div class=\"row text-left\">\n                            <div class=\"col-md-4\">\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "course", "course", options) : helperMissing.call(depth0, "link-to", "course", "course", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "course.intro", options) : helperMissing.call(depth0, "markdown", "course.intro", options))));
  data.buffer.push("\n                            </div>\n                            <div class=\"col-md-8 chapterIntro\">\n                                <table class=\"subchapterBox\">\n                                    ");
  stack1 = helpers.each.call(depth0, "chapter", "in", "course.chapters", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </table>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            ");
  return buffer;
  }
function program3(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "course.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("course.imageSrc")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"pull-left\" />");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                        <tr>\n                                            <td class=\"numberCell\">\n                                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "chapter", "course", "chapter", options) : helperMissing.call(depth0, "link-to", "chapter", "course", "chapter", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                                </div>\n                                            </td>\n                                            <td>\n                                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "chapter", "course", "chapter", options) : helperMissing.call(depth0, "link-to", "chapter", "course", "chapter", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                            </td>\n                                        </tr>\n                                    ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                    <div class=\"oppgavekapittelBox\">\n                                                        ");
  stack1 = helpers._triageMustache.call(depth0, "chapter.kapittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                                    </a>\n                                                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                    <h2>");
  stack1 = helpers._triageMustache.call(depth0, "chapter.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n                                                    <div class=\"oneliner\">");
  stack1 = helpers._triageMustache.call(depth0, "chapter.oneliner", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                                                ");
  return buffer;
  }

  data.buffer.push("<div class=\"pageContent\">\n    <div class=\"row\">\n        ");
  stack1 = helpers.each.call(depth0, "course", "in", "controller.arrangedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["epostliste"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.content.content", options) : helperMissing.call(depth0, "markdown", "model.content.content", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"pageContent mediumBottomPadding\">\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n    ");
  stack1 = helpers['if'].call(depth0, "model.content.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n</div>\n\n<div class=\"mediumBottomPadding\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("controller.settings.logo")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <li class=\"headerItem\">\n                                ");
  stack1 = helpers['if'].call(depth0, "page.route", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                            </li>\n                        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("a")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "page.route", options) : helperMissing.call(depth0, "link-to", "page.route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                        ");
  stack1 = helpers._triageMustache.call(depth0, "page.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("a")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "page", "page.id", options) : helperMissing.call(depth0, "link-to", "page", "page.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  return buffer;
  }

  data.buffer.push("<div id=\"topHeaderArea\">\n    <div class=\"pageContent\">\n        <nav class=\"navbar navbar-default\" role=\"navigation\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("a")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                </div>\n\n\n                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                    <ul class=\"nav navbar-nav\">\n                        ");
  stack1 = helpers.each.call(depth0, "page", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </ul>\n                </div>\n            </div>\n        </nav>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "page.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n        <div class=\"introText\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "page.content", options) : helperMissing.call(depth0, "markdown", "page.content", options))));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "course.visible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                <div class=\"courseBox\">\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("a"),
    'class': ("boxlink")
  },hashTypes:{'tagName': "STRING",'class': "STRING"},hashContexts:{'tagName': depth0,'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "course", "course", options) : helperMissing.call(depth0, "link-to", "course", "course", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <div class=\"courseImageDiv\">\n                            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("course.imageSrc")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                        </div>\n\n                        <div class=\"courseHeader\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "course.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        ");
  stack1 = helpers['if'].call(depth0, "event.isVisible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            ");
  stack1 = helpers['if'].call(depth0, "event.isInFuture", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                <tr>\n                                    <td>");
  data.buffer.push(escapeExpression((helper = helpers.dmy_no || (depth0 && depth0.dmy_no),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.date", options) : helperMissing.call(depth0, "dmy_no", "event.date", options))));
  data.buffer.push("</td>\n                                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.ageGroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                    <td>");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","STRING","ID"],data:data},helper ? helper.call(depth0, "Mer Info", "kodeklubb.event", "event", options) : helperMissing.call(depth0, "link-to", "Mer Info", "kodeklubb.event", "event", options))));
  data.buffer.push("</td>\n                                </tr>\n                            ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "controller.settings.mailinglistHeader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller.epostliste.content", options) : helperMissing.call(depth0, "markdown", "controller.epostliste.content", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    <div>\n                        <h4>");
  data.buffer.push(escapeExpression((helper = helpers.dmy || (depth0 && depth0.dmy),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "update.publishedDate", options) : helperMissing.call(depth0, "dmy", "update.publishedDate", options))));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "update.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "update.content", options) : helperMissing.call(depth0, "markdown", "update.content", options))));
  data.buffer.push("\n                        ");
  stack1 = helpers['if'].call(depth0, "update.route", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                    <hr width=\"25%\" />\n\n                ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <div><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("update.route")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Les Mer <span class=\"glyphicon glyphicon-chevron-right\"></span></a></div>\n                        ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <div align=\"center\">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller.settings.adsenseLeaderboard", options) : helperMissing.call(depth0, "markdown", "controller.settings.adsenseLeaderboard", options))));
  data.buffer.push("\n                </div>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"headerIntroArea\">\n    ");
  stack1 = helpers['if'].call(depth0, "page", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <div class=\"introCourses\">\n        ");
  stack1 = helpers.each.call(depth0, "course", "in", "controller.courses", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n\n<div class=\"indexInfoArea\">\n    <div class=\"pageContent\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-md-6\">\n                <h1>");
  stack1 = helpers._triageMustache.call(depth0, "controller.settings.upcoming_courses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n                <table class=\"table\">\n                    <tr>\n                        <th>Dato</th>\n                        <th>Tittel</th>\n                        <th>Anbefalt aldersgruppe</th>\n                        <th style=\"min-width: 100px;\"></th>\n                    </tr>\n\n                    ");
  stack1 = helpers.each.call(depth0, "event", "in", "sortedEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </table>\n\n                ");
  stack1 = helpers['if'].call(depth0, "controller.epostliste.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n\n            <div class=\"col-sm-12 col-md-5 col-md-offset-1 greenBorderLeft\">\n                <h1>");
  stack1 = helpers._triageMustache.call(depth0, "controller.settings.updates_header", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n                ");
  stack1 = helpers.each.call(depth0, "update", "in", "updates", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n\n\n            ");
  stack1 = helpers['if'].call(depth0, "controller.settings.adsenseLeaderboard", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["kodeklubb"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"mediumBottomPadding\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["kodeklubb/event"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            Sted: ");
  stack1 = helpers._triageMustache.call(depth0, "sted", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"headerIntroArea\">\n    <h1>");
  data.buffer.push(escapeExpression((helper = helpers.dmy_no || (depth0 && depth0.dmy_no),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "date", options) : helperMissing.call(depth0, "dmy_no", "date", options))));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n    <div class=\"introText\">\n        Anbefalt aldersgrense: ");
  stack1 = helpers._triageMustache.call(depth0, "ageGroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br />\n        ");
  stack1 = helpers['if'].call(depth0, "sted", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n\n<div class=\"pageContent\">\n    <div class=\"tenMarginGap\"></div>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.intro", options) : helperMissing.call(depth0, "markdown", "content.intro", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Tilbake til Lambertseter Kodeklubb", "kodeklubb", options) : helperMissing.call(depth0, "link-to", "Tilbake til Lambertseter Kodeklubb", "kodeklubb", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["kodeklubb/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "event.isVisible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "event.isInFuture", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    <tr>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.dmy_no || (depth0 && depth0.dmy_no),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.date", options) : helperMissing.call(depth0, "dmy_no", "event.date", options))));
  data.buffer.push("</td>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.ageGroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","STRING","ID"],data:data},helper ? helper.call(depth0, "Mer Info", "kodeklubb.event", "event", options) : helperMissing.call(depth0, "link-to", "Mer Info", "kodeklubb.event", "event", options))));
  data.buffer.push("</td>\n                    </tr>\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "event.isVisible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "event.isInPast", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    <tr>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.dmy_no || (depth0 && depth0.dmy_no),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.date", options) : helperMissing.call(depth0, "dmy_no", "event.date", options))));
  data.buffer.push("</td>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.ageGroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("r</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","STRING","ID"],data:data},helper ? helper.call(depth0, "Mer Info", "kodeklubb.event", "event", options) : helperMissing.call(depth0, "link-to", "Mer Info", "kodeklubb.event", "event", options))));
  data.buffer.push("</td>\n                    </tr>\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"headerIntroArea\">\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "page.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n</div>\n\n\n<div class=\"pageContent\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "page.content", options) : helperMissing.call(depth0, "markdown", "page.content", options))));
  data.buffer.push("\n\n    <h2>Kommende Kurs</h2>\n    <table class=\"table\">\n        <tr>\n            <th>Dato</th>\n            <th>Tittel</th>\n            <th>Anbefalt aldersgruppe</th>\n            <th></th>\n        </tr>\n\n        ");
  stack1 = helpers.each.call(depth0, "event", "in", "sortedEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </table>\n\n    <h2>Tidligere Kurs</h2>\n    <table class=\"table\">\n        <tr>\n            <th>Dato</th>\n            <th>Tittel</th>\n            <th>Anbefalt aldersgruppe</th>\n            <th></th>\n        </tr>\n\n        ");
  stack1 = helpers.each.call(depth0, "event", "in", "sortedEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </table>\n\n\n    <p>Om du vil bli varslet angående arrangementene til Lambertseter Kodeklubb, eller oppdateringer til innholdet på Kodegenet.no, meld deg på epostlisten under!</p>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "epostliste", options) : helperMissing.call(depth0, "render", "epostliste", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["om"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"headerIntroArea\">\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n</div>\n\n<div class=\"pageContent\">\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
  data.buffer.push("\n</div>\n\n<div class=\"mediumBottomPadding\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["page"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"pageContent\">\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});