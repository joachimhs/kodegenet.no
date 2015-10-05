Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
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

Ember.TEMPLATES["chapter-menu-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
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

Ember.TEMPLATES["chapter"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["chapter/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
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

Ember.TEMPLATES["chapter/oppgave"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/blur-text-field"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["components/bruker-info"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"input-form-validation input-form-validation-error\">* Epost addressen er ikke gyldig</div>\n                ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"input-form-validation input-form-validation-error\">* Fornavnet må inneholde minst 5 tegn</div>\n                ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"input-form-validation input-form-validation-error\">* Etternavnet må inneholde minst 5 tegn</div>\n                ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"input-form-validation input-form-validation-error\">* Addressen må inneholde minst 4 tegn</div>\n                ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"input-form-validation input-form-validation-error\">* Postnummer må inneholde 4 tegn</div>\n                ");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"input-form-validation input-form-validation-error\">* Telefonnummer må inneholde 4 tegn</div>\n                ");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"input-form-validation input-form-validation-error\">* Poststed må inneholde minst 2 tegn</div>\n                ");
  }

  data.buffer.push("<div class=\"cart-shipping-details\">\n    <div class=\"section label-placeholder\">\n        <div class=\"input-set\">\n            <fieldset>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'elementId': ("registerEmailAddress"),
    'type': ("text"),
    'name': ("emailAddress"),
    'value': ("loginEmailAddress"),
    'classNames': ("input-placeholder"),
    'focus-out': ("emailFocusOut"),
    'key-down': ("emailKeyDown"),
    'required': ("")
  },hashTypes:{'elementId': "STRING",'type': "STRING",'name': "STRING",'value': "ID",'classNames': "STRING",'focus-out': "STRING",'key-down': "STRING",'required': "STRING"},hashContexts:{'elementId': depth0,'type': depth0,'name': depth0,'value': depth0,'classNames': depth0,'focus-out': depth0,'key-down': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                <label for=\"emailAddress\">Epost addresse</label>\n                ");
  stack1 = helpers['if'].call(depth0, "emailAddressIsInvalid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </fieldset>\n            <fieldset>\n                ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'type': ("text"),
    'name': ("givenName"),
    'value': ("givenName"),
    'classNames': ("input-placeholder"),
    'minLength': (5),
    'valueValid': ("givenNameValid"),
    'required': ("")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'classNames': "STRING",'minLength': "INTEGER",'valueValid': "ID",'required': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'classNames': depth0,'minLength': depth0,'valueValid': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                <label for=\"firstName\">Fornavn</label>\n                ");
  stack1 = helpers.unless.call(depth0, "givenNameValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </fieldset>\n            <fieldset>\n                ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'type': ("text"),
    'name': ("surname"),
    'value': ("surname"),
    'classNames': ("input-placeholder"),
    'minLength': (5),
    'valueValid': ("surnameValid"),
    'required': ("")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'classNames': "STRING",'minLength': "INTEGER",'valueValid': "ID",'required': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'classNames': depth0,'minLength': depth0,'valueValid': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                <label for=\"firstName\">Etternavn</label>\n                ");
  stack1 = helpers.unless.call(depth0, "surnameValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </fieldset>\n            <fieldset>\n                ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'type': ("text"),
    'name': ("address"),
    'value': ("address"),
    'classNames': ("input-placeholder"),
    'minLength': (4),
    'valueValid': ("addressValid"),
    'required': ("")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'classNames': "STRING",'minLength': "INTEGER",'valueValid': "ID",'required': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'classNames': depth0,'minLength': depth0,'valueValid': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                <label for=\"address\">Addresse</label>\n                ");
  stack1 = helpers.unless.call(depth0, "addressValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </fieldset>\n            <fieldset>\n                ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'value': ("postalCode"),
    'type': ("text"),
    'value': ("postalCode"),
    'name': ("inputPostalcode"),
    'classNames': ("input-placeholder"),
    'minLength': (4),
    'valueValid': ("postcodeValid"),
    'required': ("")
  },hashTypes:{'value': "ID",'type': "STRING",'value': "ID",'name': "STRING",'classNames': "STRING",'minLength': "INTEGER",'valueValid': "ID",'required': "STRING"},hashContexts:{'value': depth0,'type': depth0,'value': depth0,'name': depth0,'classNames': depth0,'minLength': depth0,'valueValid': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                <label for=\"inputPostalcode\">Postnummer</label>\n                ");
  stack1 = helpers.unless.call(depth0, "postcodeValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </fieldset>\n            <fieldset>\n                ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'value': ("postalCode"),
    'type': ("text"),
    'value': ("phone"),
    'name': ("inputPhone"),
    'classNames': ("input-placeholder"),
    'minLength': (4),
    'valueValid': ("phoneValid"),
    'required': ("")
  },hashTypes:{'value': "ID",'type': "STRING",'value': "ID",'name': "STRING",'classNames': "STRING",'minLength': "INTEGER",'valueValid': "ID",'required': "STRING"},hashContexts:{'value': depth0,'type': depth0,'value': depth0,'name': depth0,'classNames': depth0,'minLength': depth0,'valueValid': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                <label for=\"inputPostalcode\">Telefonnummer</label>\n                ");
  stack1 = helpers.unless.call(depth0, "phoneValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </fieldset>\n            <fieldset>\n                ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'value': ("postalCode"),
    'value': ("city"),
    'type': ("text"),
    'name': ("inputPostalcity"),
    'classNames': ("input-placeholder"),
    'minLength': (2),
    'valueValid': ("cityValid"),
    'required': ("")
  },hashTypes:{'value': "ID",'value': "ID",'type': "STRING",'name': "STRING",'classNames': "STRING",'minLength': "INTEGER",'valueValid': "ID",'required': "STRING"},hashContexts:{'value': depth0,'value': depth0,'type': depth0,'name': depth0,'classNames': depth0,'minLength': depth0,'valueValid': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                <label for=\"inputPostalcity\">Poststed</label>\n                ");
  stack1 = helpers.unless.call(depth0, "cityValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </fieldset>\n\n                <button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "registrerKonto", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Registrer ny konto</button>\n\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/event-table"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <tr>\n            <td>");
  data.buffer.push(escapeExpression((helper = helpers.dmy_no || (depth0 && depth0.dmy_no),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.date", options) : helperMissing.call(depth0, "dmy_no", "event.date", options))));
  data.buffer.push("</td>\n            <td class=\"capitalize\">");
  stack1 = helpers._triageMustache.call(depth0, "event.type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n            <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n            <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.remainingSpots", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ledige / ");
  stack1 = helpers._triageMustache.call(depth0, "event.capacity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" totalt</td>\n            <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.ageGroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n            <td>\n                ");
  stack1 = helpers['if'].call(depth0, "event.isKodeklubb", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "event.isMakerspace", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "event.isInFuture", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </td>\n        </tr>\n\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("label label-primary")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0,depth0],types:["STRING","STRING","ID"],data:data},helper ? helper.call(depth0, "Mer Info", "kodeklubb.event", "event", options) : helperMissing.call(depth0, "link-to", "Mer Info", "kodeklubb.event", "event", options))));
  data.buffer.push("\n\n                ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("label label-primary")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0,depth0],types:["STRING","STRING","ID"],data:data},helper ? helper.call(depth0, "Mer Info", "makerspace.event", "event", options) : helperMissing.call(depth0, "link-to", "Mer Info", "makerspace.event", "event", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("label label-primary")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0,depth0],types:["STRING","STRING","ID"],data:data},helper ? helper.call(depth0, "Påmelding", "event.paamelding", "event.id", options) : helperMissing.call(depth0, "link-to", "Påmelding", "event.paamelding", "event.id", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\n        <tr><td colspan=\"4\">Nye kodekvelder blir annonsert snart!</td></tr>\n    ");
  }

  data.buffer.push("<table class=\"table\">\n    <tr>\n        <th>Dato</th>\n        <th>Type</th>\n        <th>Tittel</th>\n        <th>Ledige Plasser</th>\n        <th>Anbefalt aldersgruppe</th>\n        <th style=\"min-width: 100px;\"></th>\n    </tr>\n\n    ");
  stack1 = helpers.each.call(depth0, "event", "in", "events", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</table>");
  return buffer;
  
});

Ember.TEMPLATES["components/facebook-follow"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/render-subchapter"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
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

Ember.TEMPLATES["components/shopping-cart"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <div class=\"col-md-6 text-left\">\n                <img class=\"cart-item-thumbnail pull-left\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("cartProduct.product.thumbnail.href")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                <h4>");
  stack1 = helpers._triageMustache.call(depth0, "cartProduct.product.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n                <h4>Enhetspris ");
  stack1 = helpers._triageMustache.call(depth0, "cartProduct.product.price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(",-</h4>\n                <h4>Antall\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <div class=\"input-group-addon pointer\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "decreaseAmount", "cartProduct", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">-</div>\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("cartProduct.orderedProductNumber"),
    'classNames': ("form-control"),
    'placeholder': ("Antall")
  },hashTypes:{'type': "STRING",'value': "ID",'classNames': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'classNames': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                            <div class=\"input-group-addon pointer\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "increaseAmount", "cartProduct", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">+</div>\n                        </div>\n                    </div>\n                </h4>\n            </div>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div class=\"text-right\">\n            <div class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doShowCollectShippingDetails", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                Kjøp ");
  stack1 = helpers._triageMustache.call(depth0, "cart.numProducts", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" produkt");
  stack1 = helpers.unless.call(depth0, "cart.isSingular", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" for kr. ");
  stack1 = helpers._triageMustache.call(depth0, "cart.subtotal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(",-\n            </div>\n        </div>\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("er");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <h4>Leveringsinformasjon</h4>\n\n        <div class=\"cart-shipping-details\">\n            <div class=\"section label-placeholder\">\n                <div class=\"input-set\">\n                    <fieldset>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'elementId': ("emailAddress"),
    'type': ("text"),
    'name': ("emailAddress"),
    'value': ("emailAddress"),
    'classNames': ("input-placeholder"),
    'focus-out': ("emailFocusOut"),
    'key-down': ("emailKeyDown"),
    'required': ("")
  },hashTypes:{'elementId': "STRING",'type': "STRING",'name': "STRING",'value': "ID",'classNames': "STRING",'focus-out': "STRING",'key-down': "STRING",'required': "STRING"},hashContexts:{'elementId': depth0,'type': depth0,'name': depth0,'value': depth0,'classNames': depth0,'focus-out': depth0,'key-down': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                        <label for=\"emailAddress\">Epost addresse</label>\n                        ");
  stack1 = helpers['if'].call(depth0, "emailAddressIsInvalid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </fieldset>\n                    <fieldset>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'type': ("text"),
    'name': ("givenName"),
    'value': ("givenName"),
    'classNames': ("input-placeholder"),
    'minLength': (5),
    'valueValid': ("givenNameValid"),
    'required': ("")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'classNames': "STRING",'minLength': "INTEGER",'valueValid': "ID",'required': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'classNames': depth0,'minLength': depth0,'valueValid': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                        <label for=\"firstName\">Fornavn</label>\n                        ");
  stack1 = helpers.unless.call(depth0, "givenNameValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </fieldset>\n                    <fieldset>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'type': ("text"),
    'name': ("surname"),
    'value': ("surname"),
    'classNames': ("input-placeholder"),
    'minLength': (5),
    'valueValid': ("surnameValid"),
    'required': ("")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'classNames': "STRING",'minLength': "INTEGER",'valueValid': "ID",'required': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'classNames': depth0,'minLength': depth0,'valueValid': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                        <label for=\"firstName\">Etternavn</label>\n                        ");
  stack1 = helpers.unless.call(depth0, "surnameValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </fieldset>\n                    <fieldset>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'type': ("text"),
    'name': ("address"),
    'value': ("address"),
    'classNames': ("input-placeholder"),
    'minLength': (4),
    'valueValid': ("addressValid"),
    'required': ("")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'classNames': "STRING",'minLength': "INTEGER",'valueValid': "ID",'required': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'classNames': depth0,'minLength': depth0,'valueValid': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                        <label for=\"address\">Addresse</label>\n                        ");
  stack1 = helpers.unless.call(depth0, "addressValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </fieldset>\n                    <fieldset>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'value': ("postalCode"),
    'type': ("text"),
    'value': ("postalCode"),
    'name': ("inputPostalcode"),
    'classNames': ("input-placeholder"),
    'minLength': (4),
    'valueValid': ("postcodeValid"),
    'required': ("")
  },hashTypes:{'value': "ID",'type': "STRING",'value': "ID",'name': "STRING",'classNames': "STRING",'minLength': "INTEGER",'valueValid': "ID",'required': "STRING"},hashContexts:{'value': depth0,'type': depth0,'value': depth0,'name': depth0,'classNames': depth0,'minLength': depth0,'valueValid': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                        <label for=\"inputPostalcode\">Postnummer</label>\n                        ");
  stack1 = helpers.unless.call(depth0, "postcodeValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </fieldset>\n                    <fieldset>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'value': ("postalCode"),
    'type': ("text"),
    'value': ("phone"),
    'name': ("inputPhone"),
    'classNames': ("input-placeholder"),
    'minLength': (4),
    'valueValid': ("phoneValid"),
    'required': ("")
  },hashTypes:{'value': "ID",'type': "STRING",'value': "ID",'name': "STRING",'classNames': "STRING",'minLength': "INTEGER",'valueValid': "ID",'required': "STRING"},hashContexts:{'value': depth0,'type': depth0,'value': depth0,'name': depth0,'classNames': depth0,'minLength': depth0,'valueValid': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                        <label for=\"inputPostalcode\">Telefonnummer</label>\n                        ");
  stack1 = helpers.unless.call(depth0, "phoneValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </fieldset>\n                    <fieldset>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'value': ("postalCode"),
    'value': ("city"),
    'type': ("text"),
    'name': ("inputPostalcity"),
    'classNames': ("input-placeholder"),
    'minLength': (2),
    'valueValid': ("cityValid"),
    'required': ("")
  },hashTypes:{'value': "ID",'value': "ID",'type': "STRING",'name': "STRING",'classNames': "STRING",'minLength': "INTEGER",'valueValid': "ID",'required': "STRING"},hashContexts:{'value': depth0,'value': depth0,'type': depth0,'name': depth0,'classNames': depth0,'minLength': depth0,'valueValid': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                        <label for=\"inputPostalcity\">Poststed</label>\n                        ");
  stack1 = helpers.unless.call(depth0, "cityValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </fieldset>\n                </div>\n            </div>\n\n            <div class=\"checkout-checkbox-input\">\n                <fieldset>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("inputCreateAccount"),
    'type': ("checkbox"),
    'name': ("inputCreateAccount"),
    'checked': ("createAccount")
  },hashTypes:{'id': "STRING",'type': "STRING",'name': "STRING",'checked': "ID"},hashContexts:{'id': depth0,'type': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    <label for=\"inputCreateAccount\">Opprett ny konto?</label>\n                </fieldset>\n                ");
  stack1 = helpers['if'].call(depth0, "createAccount", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            </div>\n\n            <div class=\"clearfix\"></div>\n\n            <div class=\"text-left\">\n                ");
  stack1 = helpers['if'].call(depth0, "shippingDetailsCollected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(25, program25, data),fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n    ");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push("\n                            <div class=\"input-form-validation input-form-validation-error\">* Epost addressen er ikke gyldig</div>\n                        ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n                            <div class=\"input-form-validation input-form-validation-error\">* Fornavnet må inneholde minst 1 tegn</div>\n                        ");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n                            <div class=\"input-form-validation input-form-validation-error\">* Etternavnet må inneholde minst 1 tegn</div>\n                        ");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\n                            <div class=\"input-form-validation input-form-validation-error\">* Addressen må inneholde minst 4 tegn</div>\n                        ");
  }

function program15(depth0,data) {
  
  
  data.buffer.push("\n                            <div class=\"input-form-validation input-form-validation-error\">* Postnummer må inneholde 4 tegn</div>\n                        ");
  }

function program17(depth0,data) {
  
  
  data.buffer.push("\n                            <div class=\"input-form-validation input-form-validation-error\">* Telefonnummer må inneholde 4 tegn</div>\n                        ");
  }

function program19(depth0,data) {
  
  
  data.buffer.push("\n                            <div class=\"input-form-validation input-form-validation-error\">* Poststed må inneholde minst 2 tegn</div>\n                        ");
  }

function program21(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"input-form-validation input-form-validation-error\"> * vi vil sende deg en passord-reset pr. epost</div>\n                ");
  }

function program23(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <div class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "triggerStripePurchase", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        <i class=\"fa fa-credit-card\"></i> Betal for ");
  stack1 = helpers._triageMustache.call(depth0, "cart.numProducts", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" produkt");
  stack1 = helpers.unless.call(depth0, "cart.isSingular", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" for kr. ");
  stack1 = helpers._triageMustache.call(depth0, "cart.subtotal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(",-\n                    </div>\n                ");
  return buffer;
  }

function program25(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"btn btn-primary disabled\">\n                        <i class=\"fa fa-times\"></i> Leveringsinformasjon mangler\n                    </div>\n                ");
  }

  data.buffer.push("<div class=\"pageContent\">\n    <div class=\"row\">\n\n        ");
  stack1 = helpers.each.call(depth0, "cartProduct", "in", "cart.cartProducts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    ");
  stack1 = helpers.unless.call(depth0, "showShippingDetails", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "showShippingDetails", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/social-buttons"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/stripe-payment-button"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["components/test-component"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div>TEST COMPONENT!!</div>");
  
});

Ember.TEMPLATES["components/validating-textfield"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["components/vimeo-player"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["course"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
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

  data.buffer.push("<div class=\"pageContent\">\n    <h1>");
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
  data.buffer.push("\n        </div>\n    </div>\n</div>\n\n<div id=\"facebook-logo-submenu\">\n    <a href=\"https://www.facebook.com/LambertseterKodeklubb\"><img src=\"/figurer/facebook_logo.png\"/></a>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["course/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
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

Ember.TEMPLATES["course_old"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
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

Ember.TEMPLATES["courses"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"mediumBottomPadding\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["courses/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
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

Ember.TEMPLATES["emailVerificationTokens"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <h1>Din epost er verifisert! <i class=\"fa fa-2x fa-check\"></i></h1>\n    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <h1>Verifiserer Epost. <i class=\"fa fa-2x fa-spinner fa-spin\"></i></h1>\n    ");
  }

  data.buffer.push("<div class=\"pageContent\">\n    ");
  stack1 = helpers['if'].call(depth0, "tokenVerified", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["epostliste"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
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

Ember.TEMPLATES["event/paamelding"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "eventLagret", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "controller.errorMessage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "session.session.user.eventParticipants", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <form class=\"form\">\n            <div class=\"section label-placeholder\">\n                <div class=\"input-set\">\n                    <fieldset>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'type': ("text"),
    'name': ("givenName"),
    'value': ("controller.givenName"),
    'classNames': ("input-placeholder"),
    'minLength': (2),
    'valueValid': ("givenNameValid"),
    'required': ("")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'classNames': "STRING",'minLength': "INTEGER",'valueValid': "ID",'required': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'classNames': depth0,'minLength': depth0,'valueValid': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                        <label for=\"firstName\">Fornavn</label>\n                        ");
  stack1 = helpers.unless.call(depth0, "givenNameValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </fieldset>\n\n                    <fieldset>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'type': ("text"),
    'name': ("surname"),
    'value': ("controller.surname"),
    'classNames': ("input-placeholder"),
    'minLength': (3),
    'valueValid': ("surnameValid"),
    'required': ("")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'classNames': "STRING",'minLength': "INTEGER",'valueValid': "ID",'required': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'classNames': depth0,'minLength': depth0,'valueValid': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                        <label for=\"firstName\">Etternavn</label>\n                        ");
  stack1 = helpers.unless.call(depth0, "givenNameValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </fieldset>\n\n                    <fieldset>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'type': ("text"),
    'name': ("age"),
    'value': ("controller.age"),
    'classNames': ("input-placeholder"),
    'minLength': (1),
    'valueValid': ("ageValid"),
    'required': ("")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'classNames': "STRING",'minLength': "INTEGER",'valueValid': "ID",'required': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'classNames': depth0,'minLength': depth0,'valueValid': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                        <label for=\"firstName\">Alder</label>\n                        ");
  stack1 = helpers.unless.call(depth0, "givenNameValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </fieldset>\n\n                    <fieldset>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['validating-textfield'] || (depth0 && depth0['validating-textfield']),options={hash:{
    'type': ("email"),
    'name': ("email"),
    'value': ("controller.email"),
    'classNames': ("input-placeholder"),
    'required': ("")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'classNames': "STRING",'required': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'classNames': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "validating-textfield", options))));
  data.buffer.push("\n                        <label for=\"firstName\">Deltakers epost</label>\n                        <div class=\"input-form-validation input-form-validation-error\">* Oppsummeringsepost vil sendes hit</div>\n                    </fieldset>\n                </div>\n            </div>\n\n            <div class=\"checkout-checkbox-input\">\n                <fieldset>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("inputPublishInfo"),
    'type': ("checkbox"),
    'name': ("inputPublishInfo"),
    'checked': ("controller.publishInfo")
  },hashTypes:{'id': "STRING",'type': "STRING",'name': "STRING",'checked': "ID"},hashContexts:{'id': depth0,'type': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    <label for=\"inputPublishInfo\">Publiser fornavn og alder på Kodegenet.no?</label>\n                </fieldset>\n                ");
  stack1 = helpers['if'].call(depth0, "publishInfo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n\n            <div class=\"clearfix\"></div>\n\n            <h2>Meld deltaker på følgende kodeklubber/makerspaces:</h2>\n\n            <table class=\"table\">\n                <tr>\n                    <th>Påmelding</th>\n                    <th>Dato</th>\n                    <th>Type</th>\n                    <th>Tittel</th>\n                    <th>Ledige Plasser</th>\n                    <th>Anbefalt aldersgruppe</th>\n                </tr>\n\n                ");
  stack1 = helpers.each.call(depth0, "event", "in", "controllers.event.futureEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </table>\n\n\n            <div class=\"btn btn-primary mediumBottomMargin form-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "registerParticipant", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                <i class=\"fa fa-check\"></i> Meld på!\n            </div>\n        </form>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"event-lagret\">\n                <h1>Takk for din påmelding!</h1>\n                <div class=\"event-lagret-name\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "controller.givenName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "controller.surname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" er nå påmeldt til:\n                </div>\n\n                <div>\n                    <ul>\n                        ");
  stack1 = helpers.each.call(depth0, "event", "in", "controllers.event.futureEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </ul>\n\n                </div>\n                <div class=\"event-lagret-knapper\">\n                    ");
  stack1 = helpers['if'].call(depth0, "event.isKodeklubb", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    ");
  stack1 = helpers['if'].call(depth0, "event.isMakerspace", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    <button class=\"btn btn-primary form-control tenMarginGap\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "registrerNyDeltaker", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Registrer flere deltakere</button>\n                </div>\n            </div>\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            ");
  stack1 = helpers['if'].call(depth0, "event.meldPaa", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                <li>");
  stack1 = helpers._triageMustache.call(depth0, "event.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.dmy_no || (depth0 && depth0.dmy_no),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.date", options) : helperMissing.call(depth0, "dmy_no", "event.date", options))));
  data.buffer.push("</li>\n                            ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary form-control")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0,depth0],types:["STRING","STRING","ID"],data:data},helper ? helper.call(depth0, "Gå til Kodeklubben", "kodeklubb.event", "event", options) : helperMissing.call(depth0, "link-to", "Gå til Kodeklubben", "kodeklubb.event", "event", options))));
  data.buffer.push("\n                    ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary form-control ")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0,depth0],types:["STRING","STRING","ID"],data:data},helper ? helper.call(depth0, "Gå til Markespace", "makerspace.event", "event", options) : helperMissing.call(depth0, "link-to", "Gå til Markespace", "makerspace.event", "event", options))));
  data.buffer.push("\n                    ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"alert alert-danger\" role=\"alert\">");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller.errorMessage", options) : helperMissing.call(depth0, "markdown", "controller.errorMessage", options))));
  data.buffer.push("</div>\n        ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <h2>Dine tidligere registrerte deltakere</h2>\n            <table class=\"table\" style=\"max-width: 300px;\">\n                ");
  stack1 = helpers.each.call(depth0, "ep", "in", "session.session.user.eventParticipants", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </table>\n        ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <tr>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "ep.givenName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "ep.surname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (");
  stack1 = helpers._triageMustache.call(depth0, "ep.age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")</td>\n                        <td><div class=\"label label-primary pointer\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "velgDeltaker", "ep", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Velg</div></td>\n                    </tr>\n                ");
  return buffer;
  }

function program15(depth0,data) {
  
  
  data.buffer.push("\n                            <div class=\"input-form-validation input-form-validation-error\">* Fornavnet må inneholde minst 2 tegn</div>\n                        ");
  }

function program17(depth0,data) {
  
  
  data.buffer.push("\n                            <div class=\"input-form-validation input-form-validation-error\">* Etternavnet må inneholde minst 3 tegn</div>\n                        ");
  }

function program19(depth0,data) {
  
  
  data.buffer.push("\n                            <div class=\"input-form-validation input-form-validation-error\">* Alder må inneholde minst 1 tegn</div>\n                        ");
  }

function program21(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"input-form-validation input-form-validation-error\"> * Fornavn og alder vil vises på kodegenet.no.</div>\n                ");
  }

function program23(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    <tr>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'checked': ("event.meldPaa")
  },hashTypes:{'type': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.dmy_no || (depth0 && depth0.dmy_no),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.date", options) : helperMissing.call(depth0, "dmy_no", "event.date", options))));
  data.buffer.push("</td>\n                        <td class=\"capitalize\">");
  stack1 = helpers._triageMustache.call(depth0, "event.type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.remainingSpots", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ledige / ");
  stack1 = helpers._triageMustache.call(depth0, "event.capacity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" totalt</td>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.ageGroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                    </tr>\n                ");
  return buffer;
  }

function program25(depth0,data) {
  
  
  data.buffer.push("\n        <div>Du må være logget inn for å melde deg på!</div>\n    ");
  }

  data.buffer.push("<div class=\"pageContent\">\n    <h1>Påmelding til ");
  stack1 = helpers._triageMustache.call(depth0, "event.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers.dmy_no || (depth0 && depth0.dmy_no),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.date", options) : helperMissing.call(depth0, "dmy_no", "event.date", options))));
  data.buffer.push("</h1>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.intro", options) : helperMissing.call(depth0, "markdown", "event.intro", options))));
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "session.session.authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(25, program25, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("controller.settings.logo")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <li class=\"headerItem\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("page.underlineStyle")
  },hashTypes:{'style': "ID"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                            ");
  stack1 = helpers['if'].call(depth0, "page.route", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </li>\n                    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("a")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "page.route", options) : helperMissing.call(depth0, "link-to", "page.route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                    ");
  stack1 = helpers._triageMustache.call(depth0, "page.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("a")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "page", "page.id", options) : helperMissing.call(depth0, "link-to", "page", "page.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doLogOut", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Logg ut</a>\n                        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("a")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }
function program12(depth0,data) {
  
  
  data.buffer.push("\n                                Login / Register\n                            ");
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        <li class=\"headerItem\" style=\"border-bottom: 2px solid #fff\">\n                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("a")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mypage", options) : helperMissing.call(depth0, "link-to", "mypage", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </li>\n                    ");
  return buffer;
  }
function program15(depth0,data) {
  
  
  data.buffer.push("\n                                Min Side\n                            ");
  }

function program17(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class=\"headerIntroArea\">\n        <div class=\"introCourses pageContent\">\n            ");
  stack1 = helpers.each.call(depth0, "track", "in", "controllers.application.sortedTracks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n");
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "track.isVisible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    <div class=\"courseBox\">\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("a"),
    'class': ("boxlink")
  },hashTypes:{'tagName': "STRING",'class': "STRING"},hashContexts:{'tagName': depth0,'class': depth0},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "track", "track", options) : helperMissing.call(depth0, "link-to", "track", "track", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                ");
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <div class=\"courseImageDiv\">\n                                <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("track.smallImg.href")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                            </div>\n\n                            <div class=\"courseHeader\">\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "track.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n                        ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class=\"shopping-cart-header\">\n            <div class=\"row text-left\">\n                <div class=\"col-md-2 text-right\">\n                    <span class=\"fa-stack fa-5x\">\n                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n                      <i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>\n                    </span>\n                </div>\n                <div class=\"col-md-4 cart-summary\">\n                    <h4>");
  stack1 = helpers._triageMustache.call(depth0, "session.shoppingCart.numProducts", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "numProductsHeader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n                    <h4>Kr: ");
  stack1 = helpers._triageMustache.call(depth0, "session.shoppingCart.subtotal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n                </div>\n\n\n                ");
  stack1 = helpers['if'].call(depth0, "showExtendedShoppingCart", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(25, program25, data),fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n\n            ");
  stack1 = helpers['if'].call(depth0, "showExtendedShoppingCart", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n");
  return buffer;
  }
function program23(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <div class=\"col-md-6 cart-toggle\">\n                        <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doHideExtendedShoppingCart", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Skjul Handlekurven <i class=\"fa fa-caret-square-o-up\"></i></span>\n                    </div>\n                ");
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <div class=\"col-md-6 cart-toggle\">\n                        <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doShowExtendedShoppingCart", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Vis Handlekurven <i class=\"fa fa-caret-square-o-down\"></i></span>\n                    </div>\n                ");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <div class=\"shopping-cart-items\">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['shopping-cart'] || (depth0 && depth0['shopping-cart']),options={hash:{
    'cart': ("session.shoppingCart"),
    'orderSuccess': ("orderSuccess")
  },hashTypes:{'cart': "ID",'orderSuccess': "STRING"},hashContexts:{'cart': depth0,'orderSuccess': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "shopping-cart", options))));
  data.buffer.push("\n                </div>\n            ");
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"shopping-cart-icon-only\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(30, program30, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "shop", options) : helperMissing.call(depth0, "link-to", "shop", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n");
  return buffer;
  }
function program30(depth0,data) {
  
  
  data.buffer.push("\n            <span class=\"fa-stack fa-3x\">\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\n              <i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>\n            </span>\n        ");
  }

  data.buffer.push("<div id=\"topHeaderArea\">\n    <nav class=\"navbar navbar-default\" role=\"navigation\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("a")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n            </div>\n\n\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav\">\n                    ");
  stack1 = helpers.each.call(depth0, "page", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    <li class=\"headerItem\" style=\"border-bottom: 2px solid #fff\">\n                        ");
  stack1 = helpers['if'].call(depth0, "session.session.authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </li>\n\n                    ");
  stack1 = helpers['if'].call(depth0, "session.session.authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul>\n            </div>\n        </div>\n    </nav>\n</div>\n\n<div class=\"facebook-logo\">\n    <a href=\"https://www.facebook.com/LambertseterKodeklubb\"><img src=\"/figurer/facebook_logo.png\"/></a>\n</div>\n\n");
  stack1 = helpers['if'].call(depth0, "controller.showTracks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.showShoppingCart", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.showShoppingCartIcon", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div id=\"indexCarousel\" class=\"index-intro-page\">\n            <div class=\"index-intro-box clearfix\">\n                <div class=\"pageContent led-background\">\n                    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "page.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n                    <div class=\"introText\">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "page.content", options) : helperMissing.call(depth0, "markdown", "page.content", options))));
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Kodeklubb", "kodeklubb", options) : helperMissing.call(depth0, "link-to", "Kodeklubb", "kodeklubb", options))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Makerspace", "makerspace", options) : helperMissing.call(depth0, "link-to", "Makerspace", "makerspace", options))));
  data.buffer.push("\n                    </div>\n                </div>\n                <div class=\"pageContent school-background\">\n                    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "indexKurs.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n                    <div class=\"introText\">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "indexKurs.content", options) : helperMissing.call(depth0, "markdown", "indexKurs.content", options))));
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "Skole", "page", "skole", options) : helperMissing.call(depth0, "link-to", "Skole", "page", "skole", options))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "Kurs", "page", "kurs", options) : helperMissing.call(depth0, "link-to", "Kurs", "page", "kurs", options))));
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n            <div class=\"next-page\">\n                <span class=\"next-page-box\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "scrollToContent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Siste Nytt &#x25BC;</span>\n                <span class=\"next-page-box\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "scrollToKurs", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Påmelding &#x25BC;</span>\n                <span class=\"next-page-box\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "scrollToEpostlister", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Epostlister &#x25BC;</span>\n            </div>\n        </div>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        <div>\n                            <h4>");
  data.buffer.push(escapeExpression((helper = helpers.dmy_no || (depth0 && depth0.dmy_no),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "update.publishedDate", options) : helperMissing.call(depth0, "dmy_no", "update.publishedDate", options))));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "update.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n                            <div class=\"updateContent\">\n                                ");
  stack1 = helpers['if'].call(depth0, "update.image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "update.updateIntro", options) : helperMissing.call(depth0, "markdown", "update.updateIntro", options))));
  data.buffer.push("\n                            </div>\n\n                            ");
  stack1 = helpers['if'].call(depth0, "update.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                            ");
  stack1 = helpers['if'].call(depth0, "update.route", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                            ");
  stack1 = helpers['if'].call(depth0, "update.event", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                        <hr width=\"25%\" />\n\n                    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("update.image")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"updateImage\" />\n                                ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                <div>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "news", "update", options) : helperMissing.call(depth0, "link-to", "news", "update", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                            ");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push("\n                                    Les mer <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                                ");
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                <div><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("update.route")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Les Mer <span class=\"glyphicon glyphicon-chevron-right\"></span></a></div>\n                            ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                <div>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "kodeklubb.event", "update.event", options) : helperMissing.call(depth0, "link-to", "kodeklubb.event", "update.event", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                            ");
  return buffer;
  }
function program12(depth0,data) {
  
  
  data.buffer.push("\n                                    Mer informasjon og påmelding <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                                ");
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("instagramPhoto.link")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("instagramPhoto.thumbnail")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"instagram-thumbnail\" /></a>\n                            </div>\n                            <div class=\"col-md-8\">\n                                Av: <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("instagramPhoto.usernameLink")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >@");
  stack1 = helpers._triageMustache.call(depth0, "instagramPhoto.postedBy", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a><br/>\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "instagramPhoto.caption", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n                        </div>\n                    ");
  return buffer;
  }

function program16(depth0,data) {
  
  
  data.buffer.push("\n                        Eldre Nyheter <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                    ");
  }

function program18(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "controller.settings.mailinglistHeader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller.epostliste.content", options) : helperMissing.call(depth0, "markdown", "controller.epostliste.content", options))));
  data.buffer.push("\n                    ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <div class=\"row pageContent\">\n                    <div class=\"col-sm-12 col-md-12\">\n                        <div align=\"center\">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller.settings.adsenseLeaderboard", options) : helperMissing.call(depth0, "markdown", "controller.settings.adsenseLeaderboard", options))));
  data.buffer.push("\n                        </div>\n                    </div>\n                </div>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"mainAreaIndex\">\n    ");
  stack1 = helpers['if'].call(depth0, "page", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    <div id=\"indexContent\">\n        <div class=\"greenContent\">\n            <div class=\"row pageContent\">\n                <div class=\"col-sm-12 col-md-6\">\n                    ");
  stack1 = helpers.each.call(depth0, "update", "in", "sortedUpdatesLimited", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                <div class=\"col-sm-12 col-md-6 instagram-panel\">\n                    <div class=\"instagramHeader clearfix\">\n                        <img src=\"/figurer/instagram-logo-sketch.png\" />\n                        <div class=\"instagram-header-txt\">Instagrams <br />@Kodegenet</div>\n                    </div>\n                    ");
  stack1 = helpers.each.call(depth0, "instagramPhoto", "in", "sortedInstagramsLimited", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                <div class=\"col-sm-12 col-md-12\">\n                    <div>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "newsIndex", options) : helperMissing.call(depth0, "link-to", "newsIndex", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                </div>\n            </div>\n        </div>\n\n        <div id=\"indexKurs\">\n            <div class=\"row pageContent\">\n\n                <div class=\"col-sm-12 col-md-12\">\n                    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "controller.settings.upcoming_courses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['event-table'] || (depth0 && depth0['event-table']),options={hash:{
    'events': ("controllers.application.futureEvents")
  },hashTypes:{'events': "ID"},hashContexts:{'events': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "event-table", options))));
  data.buffer.push("\n\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.epostliste.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n\n        <div id=\"indexEpostliste\">\n            ");
  stack1 = helpers['if'].call(depth0, "controller.settings.adsenseLeaderboard", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["kodeklubb"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"mediumBottomPadding\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["kodeklubb/event"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <tr>\n                    <td class=\"strong\">Sted:</td>\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "sted", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                </tr>\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <tr>\n                    <td class=\"strong\">Tidspunkt:</td>\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "timeslot", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                </tr>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <h2>Påmeldinger</h2>\n                <table class=\"table\">\n                    <tr>\n                        <th>Fornavn</th>\n                        <th>Alder</th>\n                    </tr>\n\n\n                    ");
  stack1 = helpers.each.call(depth0, "participant", "in", "content.eventParticipants", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <tr>\n                        <td colspan=\"2\">\n                            ");
  stack1 = helpers['if'].call(depth0, "content.remainingSpots", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        </td>\n                    </tr>\n                </table>\n            ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <tr>\n                            <td>\n                                ");
  stack1 = helpers['if'].call(depth0, "participant.givenName", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </td>\n                            <td>");
  stack1 = helpers._triageMustache.call(depth0, "participant.age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                        </tr>\n                    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                    ");
  stack1 = helpers._triageMustache.call(depth0, "participant.givenName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n                                    -\n                                ");
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary form-control")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event.paamelding", "content.id", options) : helperMissing.call(depth0, "link-to", "event.paamelding", "content.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                    Meld deg på! (");
  stack1 = helpers._triageMustache.call(depth0, "content.remainingSpots", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" plasser igjen)\n                                ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                <button class=\"btn btn-primary form-control\" disabled>\n                                    Kurset er fullt. (");
  stack1 = helpers._triageMustache.call(depth0, "content.remainingSpots", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" plasser igjen)\n                                </button>\n                            ");
  return buffer;
  }

  data.buffer.push("<div class=\"pageContent\">\n    <h1>");
  data.buffer.push(escapeExpression((helper = helpers.dmy_no || (depth0 && depth0.dmy_no),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.date", options) : helperMissing.call(depth0, "dmy_no", "content.date", options))));
  data.buffer.push("</h1>\n    <h2>");
  stack1 = helpers._triageMustache.call(depth0, "content.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n    <div class=\"introText\">\n        <table class=\"text-left table\">\n            <tbody>\n            <tr>\n                <td class=\"strong\">Anbefalt aldersgrense:</td>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "ageGroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n            </tr>\n\n            ");
  stack1 = helpers['if'].call(depth0, "sted", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = helpers['if'].call(depth0, "timeslot", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<div class=\"pageContent\">\n    <div class=\"tenMarginGap\"></div>\n\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.intro", options) : helperMissing.call(depth0, "markdown", "content.intro", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
  data.buffer.push("\n        </div>\n\n        <div class=\"col-md-4\">\n            ");
  stack1 = helpers['if'].call(depth0, "content.capacity", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Tilbake til Kodegnet Kodeklubb", "kodeklubb", options) : helperMissing.call(depth0, "link-to", "Tilbake til Kodegnet Kodeklubb", "kodeklubb", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["kodeklubb/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"tenMarginGap\">&nbsp;</div>\n\n<div class=\"pageContent tenMarginGap\">\n    <h1 class=\"text-center\">Kommende Kodeklubber</h1>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['event-table'] || (depth0 && depth0['event-table']),options={hash:{
    'events': ("futureEvents")
  },hashTypes:{'events': "ID"},hashContexts:{'events': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "event-table", options))));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "page.content", options) : helperMissing.call(depth0, "markdown", "page.content", options))));
  data.buffer.push("\n\n    <h2>Tidligere Kurs</h2>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['event-table'] || (depth0 && depth0['event-table']),options={hash:{
    'events': ("pastEvents")
  },hashTypes:{'events': "ID"},hashContexts:{'events': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "event-table", options))));
  data.buffer.push("\n\n    <p>Om du vil bli varslet angående arrangementene til vår Kodeklubb eller Makerspace, eller oppdateringer til innholdet på Kodegenet.no, meld deg på epostlisten under!</p>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "epostliste", options) : helperMissing.call(depth0, "render", "epostliste", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"alert alert-danger\">\n                   Innlogging feilet. Brukernavn eller passord er ikke korrekt, vennligst prøv igjen\n                </div>\n            ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                                    <div class=\"input-form-validation input-form-validation-error\">* Epost addressen er ikke gyldig\n                                    </div>\n                                ");
  }

  data.buffer.push("<div class=\"pageContent\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1>Logg Inn</h1>\n\n            ");
  stack1 = helpers['if'].call(depth0, "stormpathLoginError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <div class=\"cart-shipping-details\">\n                <form>\n                    <div class=\"section label-placeholder\">\n                        <div class=\"input-set\">\n                            <fieldset>\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'elementId': ("emailAddress"),
    'type': ("text"),
    'name': ("emailAddress"),
    'value': ("loginEmailAddress"),
    'classNames': ("input-placeholder"),
    'focus-out': ("emailFocusOut"),
    'required': ("")
  },hashTypes:{'elementId': "STRING",'type': "STRING",'name': "STRING",'value': "ID",'classNames': "STRING",'focus-out': "STRING",'required': "STRING"},hashContexts:{'elementId': depth0,'type': depth0,'name': depth0,'value': depth0,'classNames': depth0,'focus-out': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                <label for=\"emailAddress\">Epost addresse</label>\n                                ");
  stack1 = helpers['if'].call(depth0, "emailAddressIsInvalid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </fieldset>\n                            <fieldset>\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'elementId': ("password"),
    'type': ("password"),
    'name': ("password"),
    'value': ("loginPassword"),
    'classNames': ("input-placeholder"),
    'required': ("")
  },hashTypes:{'elementId': "STRING",'type': "STRING",'name': "STRING",'value': "ID",'classNames': "STRING",'required': "STRING"},hashContexts:{'elementId': depth0,'type': depth0,'name': depth0,'value': depth0,'classNames': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                <label for=\"password\">Passord</label>\n                            </fieldset>\n                        </div>\n                    </div>\n\n\n                    <div class=\"clearfix\"></div>\n\n                    <div class=\"text-left\">\n                        <button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "triggerLogin", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                            <i class=\"fa fa-lock\"></i> Logg Inn\n                        </button>\n                    </div>\n                </form>\n            </div>\n\n        </div>\n        <div class=\"col-md-12\">\n            <h1>\n                Registrer Ny Konto\n            </h1>\n\n            ");
  data.buffer.push(escapeExpression((helper = helpers['bruker-info'] || (depth0 && depth0['bruker-info']),options={hash:{
    'registrerKonto': ("registrerKonto")
  },hashTypes:{'registrerKonto': "STRING"},hashContexts:{'registrerKonto': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bruker-info", options))));
  data.buffer.push("\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["makerspace"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"mediumBottomPadding\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["makerspace/event"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <tr>\n                    <td class=\"strong\">Sted:</td>\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "sted", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                </tr>\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <tr>\n                    <td class=\"strong\">Tidspunkt:</td>\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "timeslot", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                </tr>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <h2>Påmeldinger</h2>\n                <table class=\"table\">\n                    <tr>\n                        <th>Fornavn</th>\n                        <th>Alder</th>\n                    </tr>\n\n\n                    ");
  stack1 = helpers.each.call(depth0, "participant", "in", "content.eventParticipants", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <tr>\n                        <td colspan=\"2\">\n                            ");
  stack1 = helpers['if'].call(depth0, "content.remainingSpots", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        </td>\n                    </tr>\n                </table>\n            ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <tr>\n                            <td>\n                                ");
  stack1 = helpers['if'].call(depth0, "participant.givenName", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </td>\n                            <td>");
  stack1 = helpers._triageMustache.call(depth0, "participant.age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                        </tr>\n                    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                    ");
  stack1 = helpers._triageMustache.call(depth0, "participant.givenName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n                                    -\n                                ");
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary form-control")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event.paamelding", "content.id", options) : helperMissing.call(depth0, "link-to", "event.paamelding", "content.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                    Meld deg på! (");
  stack1 = helpers._triageMustache.call(depth0, "content.remainingSpots", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" plasser igjen)\n                                ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                <button class=\"btn btn-primary form-control\" disabled>\n                                    Kurset er fullt. (");
  stack1 = helpers._triageMustache.call(depth0, "content.remainingSpots", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" plasser igjen)\n                                </button>\n                            ");
  return buffer;
  }

  data.buffer.push("<div class=\"pageContent\">\n    <h1>");
  data.buffer.push(escapeExpression((helper = helpers.dmy_no || (depth0 && depth0.dmy_no),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.date", options) : helperMissing.call(depth0, "dmy_no", "content.date", options))));
  data.buffer.push("</h1>\n    <h2>");
  stack1 = helpers._triageMustache.call(depth0, "content.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n    <div class=\"introText\">\n        <table class=\"text-left table\">\n            <tbody>\n            <tr>\n                <td class=\"strong\">Anbefalt aldersgrense:</td>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "ageGroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n            </tr>\n\n            ");
  stack1 = helpers['if'].call(depth0, "sted", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = helpers['if'].call(depth0, "timeslot", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<div class=\"pageContent\">\n    <div class=\"tenMarginGap\"></div>\n\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.intro", options) : helperMissing.call(depth0, "markdown", "content.intro", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
  data.buffer.push("\n        </div>\n\n        <div class=\"col-md-4\">\n            ");
  stack1 = helpers['if'].call(depth0, "content.capacity", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Tilbake til Kodegenet Makerspace", "makerspace", options) : helperMissing.call(depth0, "link-to", "Tilbake til Kodegenet Makerspace", "makerspace", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["makerspace/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "makerspace.content", options) : helperMissing.call(depth0, "markdown", "makerspace.content", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"tenMarginGap\">&nbsp;</div>\n\n<div class=\"pageContent tenMarginGap\">\n    <h1 class=\"text-center\">Kommende Makerspaces</h1>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['event-table'] || (depth0 && depth0['event-table']),options={hash:{
    'events': ("futureEvents")
  },hashTypes:{'events': "ID"},hashContexts:{'events': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "event-table", options))));
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "makerspace.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <h2>Tidligere Makerspaces</h2>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['event-table'] || (depth0 && depth0['event-table']),options={hash:{
    'events': ("pastEvents")
  },hashTypes:{'events': "ID"},hashContexts:{'events': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "event-table", options))));
  data.buffer.push("\n\n    <p>Om du vil bli varslet angående arrangementene til vår Kodeklubb eller Makerspace, eller oppdateringer til innholdet på Kodegenet.no, meld deg på epostlisten under!</p>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "epostliste", options) : helperMissing.call(depth0, "render", "epostliste", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["medlem"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "medlem.content", options) : helperMissing.call(depth0, "markdown", "medlem.content", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"pageContent mediumBottomPadding\">\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "medlem.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n    ");
  stack1 = helpers['if'].call(depth0, "medlem.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n</div>\n\n<div class=\"mediumBottomPadding\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["mypage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"pageContent\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"list-group mypage-list-group\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item mypage-list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Min Side", "mypage.index", options) : helperMissing.call(depth0, "link-to", "Min Side", "mypage.index", options))));
  data.buffer.push("\n\n                ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item mypage-list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Ordrebekreftelser", "mypage.orders", options) : helperMissing.call(depth0, "link-to", "Ordrebekreftelser", "mypage.orders", options))));
  data.buffer.push("\n            </div>\n        </div>\n        <div class=\"col-md-8\">\n            <div>\n                ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["mypage/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h2>Min Side</h2>");
  
});

Ember.TEMPLATES["mypage/orders/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <tr>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "order.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "order.status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "order.givenName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "order.surname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "order.orderLines.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0,depth0],types:["STRING","STRING","ID"],data:data},helper ? helper.call(depth0, "Vis", "mypage.orders.order", "order", options) : helperMissing.call(depth0, "link-to", "Vis", "mypage.orders.order", "order", options))));
  data.buffer.push("</td>\n            </tr>\n        ");
  return buffer;
  }

  data.buffer.push("<h2>Ordrebekreftelser</h2>\n\n<table class=\"table tabl-striped\">\n    <tr>\n        <th>Ordrenummer</th>\n        <th>Status</th>\n        <th>Bestiller</th>\n        <th>Ordrelinjer</th>\n        <th></th>\n    </tr>\n    <tbody>\n        ");
  stack1 = helpers.each.call(depth0, "order", "in", "controller.session.session.user.orders", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </tbody>\n</table>");
  return buffer;
  
});

Ember.TEMPLATES["mypage/orders/order"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <tr>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "orderLine.product.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "orderLine.orderedProductNumber", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>Kr. ");
  data.buffer.push(escapeExpression((helper = helpers.currencyFormat || (depth0 && depth0.currencyFormat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "orderLine.totalAmount", options) : helperMissing.call(depth0, "currencyFormat", "orderLine.totalAmount", options))));
  data.buffer.push("</td>\n                <td>\n                    Kr. ");
  stack1 = helpers['if'].call(depth0, "orderLine.discountAmount", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </td>\n            </tr>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.currencyFormat || (depth0 && depth0.currencyFormat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "orderLine.discountAmount", options) : helperMissing.call(depth0, "currencyFormat", "orderLine.discountAmount", options))));
  data.buffer.push("\n                    ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n                        0,-\n                    ");
  }

  data.buffer.push("<h1>Ordrebekreftelse: ");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n<table class=\"table\">\n    <thead>\n    <tr>\n        <th>Produkt</th>\n        <th>Antall</th>\n        <th>Pris</th>\n        <th>Rabatt</th>\n    </tr>\n    </thead>\n    <tbody>\n        ");
  stack1 = helpers.each.call(depth0, "orderLine", "in", "orderLines", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </tbody>\n</table>");
  return buffer;
  
});

Ember.TEMPLATES["news"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"pageContent\">\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    <div class=\"tenMarginGap\"></div>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "updateIntro", options) : helperMissing.call(depth0, "markdown", "updateIntro", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["newsIndex"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <div>\n                <h4>");
  data.buffer.push(escapeExpression((helper = helpers.dmy_no || (depth0 && depth0.dmy_no),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "update.publishedDate", options) : helperMissing.call(depth0, "dmy_no", "update.publishedDate", options))));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "update.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n                <div class=\"updateContent\">\n                    ");
  stack1 = helpers['if'].call(depth0, "update.image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "update.updateIntro", options) : helperMissing.call(depth0, "markdown", "update.updateIntro", options))));
  data.buffer.push("\n                </div>\n\n                ");
  stack1 = helpers['if'].call(depth0, "update.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "update.route", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "update.event", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            <hr width=\"25%\" />\n\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("update.image")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"updateImage\" />\n                    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    <div>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "news", "update", options) : helperMissing.call(depth0, "link-to", "news", "update", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("\n                        Les mer <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                    ");
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <div><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("update.route")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Les Mer <span class=\"glyphicon glyphicon-chevron-right\"></span></a></div>\n                ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    <div>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "kodeklubb.event", "update.event", options) : helperMissing.call(depth0, "link-to", "kodeklubb.event", "update.event", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                ");
  return buffer;
  }
function program10(depth0,data) {
  
  
  data.buffer.push("\n                        Mer informasjon og påmelding <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                    ");
  }

  data.buffer.push("<div class=\"row pageContent\">\n    <div class=\"col-sm-12 col-md-12\">\n        <h1>Siste Nytt</h1>\n        ");
  stack1 = helpers.each.call(depth0, "update", "in", "sortedUpdates", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["om"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"pageContent\">\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "content.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
  data.buffer.push("\n</div>\n\n<div class=\"mediumBottomPadding\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["page"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
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

Ember.TEMPLATES["passwordReset"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"pageContent\">\n    <h1>Passordet til din konto er ønsket nullstilt</h1>\n    <div>Du vil om kort til motta en epost fra Stormpath. Vennligst følg retningslinjene i eposten for å oppdatere ditt passord. </div>\n</div>\n\n<div class=\"mediumBottomPadding\"></div>");
  
});

Ember.TEMPLATES["shop"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["shop/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div class=\"row shop-index-category\">\n            <div class=\"pageContent\">\n                <div class=\"col-sm-12 col-md-7 col-md-offset-2 shop-index-category-thumb\">\n                    <div class=\"shop-index-category-text\">\n                        <div class=\"shop-index-category-title\">");
  stack1 = helpers._triageMustache.call(depth0, "category.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                        <div class=\"shop-index-category-subtitle\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "category.subtitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                    </div>\n                    <img class=\"shop-index-category-thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("category.thumbnail.href")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                </div>\n\n                <div class=\"col-sm-12 col-md-2 shop-index-category-products\">\n                    ");
  stack1 = helpers.each.call(depth0, "product", "in", "category.products", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    <div class=\"shop-index-category-button\">\n                        <button class=\"btn btn-primary\">Flere Produkter <span class=\"glyphicon glyphicon-chevron-right\"></span></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("shop-index-category-product"),
    'tagName': ("div")
  },hashTypes:{'class': "STRING",'tagName': "STRING"},hashContexts:{'class': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "shop.product", "product", options) : helperMissing.call(depth0, "link-to", "shop.product", "product", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <img class=\"shop-index-category-product-thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("product.thumbnail.href")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                            <div class=\"shop-index-category-product-name\">");
  stack1 = helpers._triageMustache.call(depth0, "product.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                        ");
  return buffer;
  }

  data.buffer.push("<div class=\"shopIndex\">\n\n    ");
  stack1 = helpers.each.call(depth0, "category", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["shop/product"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <div class=\"col-md-3\">\n                                <img class=\"product-image-thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("picture.href")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectPhoto", "picture", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("/>\n                            </div>\n                        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        <div class=\"clearfix\">\n                            <h2>");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data},helper ? helper.call(depth0, "learn.title", "course", "learn", options) : helperMissing.call(depth0, "link-to", "learn.title", "course", "learn", options))));
  data.buffer.push("</h2>\n                            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("learn.imageSrc")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"pull-left\"/>\n                            <div>");
  stack1 = helpers._triageMustache.call(depth0, "learn.intro", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                        </div>\n                    ");
  return buffer;
  }

  data.buffer.push("<div class=\"pageContent\">\n    <div class=\"product-image\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"product-main-image\">\n                    <img class=\"product-image-lightboard\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("controller.currentPhoto.href")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                </div>\n\n                <div class=\"product-main-thumbnails\">\n                    <div class=\"row\">\n                        ");
  stack1 = helpers.each.call(depth0, "picture", "in", "pictures", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    </div>\n\n                </div>\n\n                <a id=\"productDescription\"></a>\n                <div class=\"product-description\">\n                    <h1>Beskrivelse</h1>\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "model.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n\n                <a id=\"productLearn\"></a>\n                <div class=\"product-learn\">\n                    <h1>Lær å bruke</h1>\n                    ");
  stack1 = helpers.each.call(depth0, "learn", "in", "model.learn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <h2>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n                <div class=\"product-price\">Pris: NOK ");
  stack1 = helpers._triageMustache.call(depth0, "price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(",-</div>\n\n                <div class=\"product-buttons\">\n                    <button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addToCart", "model", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-shopping-cart\"></i> Legg i Handlekurven</button>\n                </div>\n\n                <hr>\n\n                <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "scrollToDescription", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Beskrivelse</div>\n                <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "scrollToLearn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Lær å bruke</div>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["track/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
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
  data.buffer.push("\n                <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("colClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                    <div>\n                        <h1>\n                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "course", "course", options) : helperMissing.call(depth0, "link-to", "course", "course", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </h1>\n                    </div>\n                    <div class=\"courseIntroBoxContent\">\n                        <div class=\"chapterIntro\">\n                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "course", "course", options) : helperMissing.call(depth0, "link-to", "course", "course", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "course.intro", options) : helperMissing.call(depth0, "markdown", "course.intro", options))));
  data.buffer.push("\n\n                            <table class=\"subchapterBox\">\n                                <tbody>\n                                ");
  stack1 = helpers.each.call(depth0, "chapter", "in", "course.chapters", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            ");
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
  data.buffer.push("\n                                    <tr>\n                                        <td class=\"numberCell\">\n                                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "chapter", "course", "chapter", options) : helperMissing.call(depth0, "link-to", "chapter", "course", "chapter", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                                        </td>\n                                        <td>\n                                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "chapter", "course", "chapter", options) : helperMissing.call(depth0, "link-to", "chapter", "course", "chapter", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                        </td>\n                                    </tr>\n                                ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                <div class=\"oppgavekapittelBox\">\n                                                    ");
  stack1 = helpers._triageMustache.call(depth0, "chapter.kapittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                                </div>\n                                            ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                <h2>");
  stack1 = helpers._triageMustache.call(depth0, "chapter.tittel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n                                                <div class=\"oneliner\">");
  stack1 = helpers._triageMustache.call(depth0, "chapter.oneliner", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                                            ");
  return buffer;
  }

  data.buffer.push("<div class=\"pageContent\">\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n    <div class=\"introText\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "model.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n\n<div class=\"pageContent\">\n    <div class=\"row\">\n        ");
  stack1 = helpers.each.call(depth0, "course", "in", "courses", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["userRegistered"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"pageContent\">\n    <h1>Din konto er registrert!</h1>\n    <div>Du vil om kort til motta en epost fra Stormpath. Vennligst følg retningslinjene i eposten for å oppdatere ditt passord. </div>\n</div>\n\n<div class=\"mediumBottomPadding\"></div>");
  
});