Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "header", options) : helperMissing.call(depth0, "render", "header", options))));
  data.buffer.push("\n\n<div id=\"mainArea\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<footer class=\"pageContent\">\n    <div class=\"row\">\n        <div class=\"col-md-5 col-md-offset-7\" style=\"text-align: right;\">\n            Designet og utviklet av <a href=\"http://haagen-software.no\">Haagen Software AS</a>\n        </div>\n    </div>\n</footer>");
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
  stack1 = helpers.each.call(depth0, "oppgave", "in", "chapter.oppgaver", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
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
  data.buffer.push("\n    ");
  stack1 = helpers.view.call(depth0, "Ember.View", {hash:{
    'class': ("well slidesBox"),
    'classBinding': ("visSlides")
  },hashTypes:{'class': "STRING",'classBinding': "STRING"},hashContexts:{'class': depth0,'classBinding': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <p>Dette kapittelet inneholder lysbilder. Lysbildene er ment for deg som ønsker å holde et programmeringskurs basert på dette kurset. Lysbildene gir et raskt overblikk over innholdet i kapittelet. Du kan velge å se lysbildene inkludert på denne siden, eller åpne lysbildene i et eget vindu.</p>\n            ");
  stack1 = helpers['if'].call(depth0, "visSlides", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "skjulSlidesAction", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"glyphicon glyphicon-chevron-right\"></span> Skjul Lysbilder</button>\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Kodegenet.RevealFrameView", {hash:{
    'src': ("slideUrl")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "visSlidesAction", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"glyphicon glyphicon-chevron-left\"></span> Vis Lysbilder</button>\n                <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("slideUrl")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\" class=\"btn btn-default\">Åpne Lysbilder i eget vindu <span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n            ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("oppgave.id")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></a>\n\n            <div class=\"kapittelHeader\">\n                <div class=\"kapittelNummer\">");
  stack1 = helpers._triageMustache.call(depth0, "kapittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(".");
  stack1 = helpers._triageMustache.call(depth0, "oppgave.kapittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                ");
  stack1 = helpers._triageMustache.call(depth0, "oppgave.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            ");
  stack1 = helpers['if'].call(depth0, "oppgave.screencastbox", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "oppgave.content", options) : helperMissing.call(depth0, "markdown", "oppgave.content", options))));
  data.buffer.push("\n        ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <div class=\"well screencast\">\n                    <p>Dette delkapittelet inneholder video. Videoene demonstrerer innholdet i delkapittelet, og vil dermed ikke gå utover delkapittelets innhold.</p>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "oppgave.screencastbox", options) : helperMissing.call(depth0, "markdown", "oppgave.screencastbox", options))));
  data.buffer.push("\n                </div>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"kapittelHeader\">\n    <div class=\"kapittelNummer\">");
  stack1 = helpers._triageMustache.call(depth0, "kapittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n");
  stack1 = helpers['if'].call(depth0, "slides", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
  data.buffer.push("\n        ");
  stack1 = helpers.each.call(depth0, "oppgave", "in", "oppgaver", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
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

Ember.TEMPLATES["course"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "controllers.chapter.chapterTittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                        Velg Kapittel\n                    ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n\n                    <button class=\"btn btn-default chooseSubchapterButton submenubutton\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleSubchapterPopover", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        <span class=\"glyphicon glyphicon-tag\"></span>\n                        ");
  stack1 = helpers['if'].call(depth0, "selectedSubchapter.oppgaveTittel", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </button>\n                ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "selectedSubchapter.oppgaveTittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\n                            Velg Delkapittel\n                        ");
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectCourse", "course", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"submenuLink\">\n                            <span class=\"glyphicon glyphicon-book\"></span> ");
  stack1 = helpers._triageMustache.call(depth0, "course.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                    ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectChapter", "chapter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"submenuLink\">\n                            <span class=\"glyphicon glyphicon-th-list\"></span> ");
  stack1 = helpers._triageMustache.call(depth0, "chapter.chapterTittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                    ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "scrollToSubchapter", "oppgave", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"submenuLink\">\n                            <span class=\"glyphicon glyphicon-tag\"></span> ");
  stack1 = helpers._triageMustache.call(depth0, "oppgave.oppgaveTittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                    ");
  return buffer;
  }

  data.buffer.push("<div class=\"submenu\" id=\"submenu\">\n    <div class=\"pageContent\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default chooseCourseButton submenubutton\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleCoursePopover", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                    <span class=\"glyphicon glyphicon-book\"></span>\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </button>\n\n                <span class=\"glyphicon glyphicon-chevron-right\"></span>\n\n                <button class=\"btn btn-default chooseChapterButton submenubutton\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleChapterPopover", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                    <span class=\"glyphicon glyphicon-th-list\"></span>\n                    ");
  stack1 = helpers['if'].call(depth0, "controllers.chapter.chapterTittel", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                </button>\n\n                ");
  stack1 = helpers['if'].call(depth0, "controllers.chapter.model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                <div id=\"coursePopover\" class=\"pop popnomore coursePopover\">\n                    ");
  stack1 = helpers.each.call(depth0, "course", "in", "controllers.courses.model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n\n                <div id=\"chapterPopover\" class=\"pop popnomore chapterPopover\">\n                    ");
  stack1 = helpers.each.call(depth0, "chapter", "in", "chapters", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n\n                <div id=\"subchapterPopover\" class=\"pop popnomore subchapterPopover\">\n                    ");
  stack1 = helpers.each.call(depth0, "oppgave", "in", "controller.controllers.chapter.oppgaver", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"pageContent courseContent\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["course/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "intro", options) : helperMissing.call(depth0, "markdown", "intro", options))));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
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
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["courses/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div class=\"well\" style=\"width: 100%\">\n            <h1 class=\"text-center\">");
  stack1 = helpers._triageMustache.call(depth0, "course.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("course.imageSrc")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" style=\"width: 90%;\" />\n                </div>\n\n                <div class=\"col-md-8\">\n                    <p>");
  stack1 = helpers._triageMustache.call(depth0, "course.intro", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                    <h1>Innhold</h1>\n\n                    <div style=\"margin-bottom: 10px;\">\n                        ");
  stack1 = helpers.each.call(depth0, "chapter", "in", "course.chapters", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n\n            <div style=\"width: 100%; text-align: right;\">\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-primary btn-wide"),
    'style': ("min-width: 250px; width: 250px;")
  },hashTypes:{'class': "STRING",'style': "STRING"},hashContexts:{'class': depth0,'style': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "course", "course", options) : helperMissing.call(depth0, "link-to", "course", "course", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-default btn-sm btn-wide")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "chapter", "course", "chapter", options) : helperMissing.call(depth0, "link-to", "chapter", "course", "chapter", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                <span class=\"glyphicon glyphicon-list-alt pull-left\"></span>\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "chapter.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n                    Les Mer <span class=\"glyphicon glyphicon-chevron-right pull-right\"></span>\n                ");
  }

  data.buffer.push("<div class=\"pageContent\">\n    ");
  stack1 = helpers.each.call(depth0, "course", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                    <img src=\"/images/kodegenet_logo.png\" style=\"height: 45px; float:left;\" />\n                ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        <li>\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("a")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "page.route", options) : helperMissing.call(depth0, "link-to", "page.route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </li>\n                    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "page.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }

  data.buffer.push("<div id=\"topHeaderArea\">\n    <div class=\"pageContent\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("a")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            <div class=\"col-md-8\">\n                <ul>\n                    ");
  stack1 = helpers.each.call(depth0, "page", "in", "pages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Raspberry Pi og JavaScript");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Kodegenets Kurs-sider");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                <div>\n                    <h4>");
  data.buffer.push(escapeExpression((helper = helpers.dmy || (depth0 && depth0.dmy),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "update.publishedDate", options) : helperMissing.call(depth0, "dmy", "update.publishedDate", options))));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "update.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "update.content", options) : helperMissing.call(depth0, "markdown", "update.content", options))));
  data.buffer.push("\n                    ");
  stack1 = helpers['if'].call(depth0, "update.route", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                <hr width=\"25%\" />\n\n            ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <div><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("update.route")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Les Mer <span class=\"glyphicon glyphicon-chevron-right\"></span></a></div>\n                    ");
  return buffer;
  }

  data.buffer.push("<div class=\"pageContent\">\n\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1>Velkommen til Kodegenet!</h1>\n\n            <p>Kodegenet er en nettside som er utviklet i forbindelse med Lambertseter Kodeklubb. Gjennom siden vil det tilbys kursmateriale som er benyttet i et av klubbens kurs.</p>\n            <p>Alt materialet er publisert med en Creative Commons lisens som gjør at materialet er gratis å bruke å endre på, så lenge det ikke benyttes til kommersielle formål.</p>\n            <p>Våren 2014 tilbys det kurs i ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "course", "courses_raspi", options) : helperMissing.call(depth0, "linkTo", "course", "courses_raspi", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" via <a href=\"http://www.deichman.no/filial/lambertseter\">Deichmann Bibliotek på Lambertseter</a>. Kurset går over 8 lørdager fra januar til mai. </p>\n            <p>Alt kursmateriell publiseres ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "courses", options) : helperMissing.call(depth0, "linkTo", "courses", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(". </p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1>Oppdateringer</h1>\n            ");
  stack1 = helpers.each.call(depth0, "update", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["om"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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