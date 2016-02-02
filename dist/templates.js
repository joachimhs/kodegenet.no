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
  data.buffer.push("\n                <label for=\"emailAddress\">Epost adresse</label>\n                ");
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
  
  
  data.buffer.push("\n            <th>Ledige Plasser</th>\n        ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <tr>\n            <td>");
  data.buffer.push(escapeExpression((helper = helpers.dmy_no || (depth0 && depth0.dmy_no),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event.date", options) : helperMissing.call(depth0, "dmy_no", "event.date", options))));
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "event.timeslot", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n            <td class=\"capitalize\">");
  stack1 = helpers._triageMustache.call(depth0, "event.type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n            <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n            ");
  stack1 = helpers['if'].call(depth0, "event.isInFuture", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.ageGroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n            <td>\n                ");
  stack1 = helpers['if'].call(depth0, "event.isKodeklubb", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "event.isMakerspace", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "event.isInFuture", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </td>\n        </tr>\n\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.remainingSpots", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ledige / ");
  stack1 = helpers._triageMustache.call(depth0, "event.capacity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" totalt</td>\n            ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("label label-primary")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0,depth0],types:["STRING","STRING","ID"],data:data},helper ? helper.call(depth0, "Mer Info", "kodeklubb.event", "event", options) : helperMissing.call(depth0, "link-to", "Mer Info", "kodeklubb.event", "event", options))));
  data.buffer.push("\n\n                ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("label label-primary")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0,depth0],types:["STRING","STRING","ID"],data:data},helper ? helper.call(depth0, "Mer Info", "makerspace.event", "event", options) : helperMissing.call(depth0, "link-to", "Mer Info", "makerspace.event", "event", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("label label-primary")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0,depth0],types:["STRING","STRING","ID"],data:data},helper ? helper.call(depth0, "Påmelding", "event.paamelding", "event.id", options) : helperMissing.call(depth0, "link-to", "Påmelding", "event.paamelding", "event.id", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program12(depth0,data) {
  
  
  data.buffer.push("\n        <tr><td colspan=\"4\">Nye kodekvelder blir annonsert snart!</td></tr>\n    ");
  }

  data.buffer.push("<table class=\"table\">\n    <tr>\n        <th>Dato</th>\n        <th>Type</th>\n        <th>Tittel</th>\n        ");
  stack1 = helpers['if'].call(depth0, "event.isInFuture", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <th>Anbefalt aldersgruppe</th>\n        <th style=\"min-width: 100px;\"></th>\n    </tr>\n\n    ");
  stack1 = helpers.each.call(depth0, "event", "in", "events", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
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
    'placeholder': ("Antall"),
    'focus-out': ("numProductsChanged"),
    'key-up': ("numProductsChanged"),
    'required': ("")
  },hashTypes:{'type': "STRING",'value': "ID",'classNames': "STRING",'placeholder': "STRING",'focus-out': "STRING",'key-up': "STRING",'required': "STRING"},hashContexts:{'type': depth0,'value': depth0,'classNames': depth0,'placeholder': depth0,'focus-out': depth0,'key-up': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
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
  data.buffer.push("\n                        <label for=\"emailAddress\">Epost adresse</label>\n                        ");
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
  data.buffer.push("\n                    </fieldset>\n                </div>\n            </div>\n\n            ");
  stack1 = helpers.unless.call(depth0, "session.session.authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            <div class=\"clearfix\"></div>\n\n            <h1>Leveringsalternativer:</h1>\n\n            <div class=\"text-left\">\n                <div class=\"radio\">\n                    <label ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "applyServicepakkeValgt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        ");
  stack1 = helpers['if'].call(depth0, "shipByServicepakke", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    </label>\n                </div>\n\n                <div class=\"radio\">\n                    <label ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "applyHentingValgt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        ");
  stack1 = helpers['if'].call(depth0, "shipByHenting", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(30, program30, data),fn:self.program(28, program28, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </label>\n                </div>\n\n                ");
  stack1 = helpers['if'].call(depth0, "shipByHenting", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(32, program32, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n\n\n            <div class=\"text-left\">\n                ");
  stack1 = helpers['if'].call(depth0, "shippingDetailsCollected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(36, program36, data),fn:self.program(34, program34, data),contexts:[depth0],types:["ID"],data:data});
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
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                <div class=\"checkout-checkbox-input\">\n\n                        <fieldset>\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("inputCreateAccount"),
    'type': ("checkbox"),
    'name': ("inputCreateAccount"),
    'checked': ("createAccount")
  },hashTypes:{'id': "STRING",'type': "STRING",'name': "STRING",'checked': "ID"},hashContexts:{'id': depth0,'type': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                            <label for=\"inputCreateAccount\">Opprett ny konto?</label>\n                        </fieldset>\n\n                    ");
  stack1 = helpers['if'].call(depth0, "createAccount", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                </div>\n            ");
  return buffer;
  }
function program22(depth0,data) {
  
  
  data.buffer.push("\n                        <div class=\"input-form-validation input-form-validation-error\"> * vi vil sende deg en passord-reset pr. epost</div>\n                    ");
  }

function program24(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <input type=\"radio\" name=\"shippingOptions\" value=\"servicepakke\" checked>\n                                Klimanøytral Servicepakke kr. ");
  stack1 = helpers._triageMustache.call(depth0, "shippingPrice", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </input>\n                        ");
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <input type=\"radio\" name=\"shippingOptions\" value=\"servicepakke\">\n                                Klimanøytral Servicepakke kr. ");
  stack1 = helpers._triageMustache.call(depth0, "shippingPrice", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </input>\n                        ");
  return buffer;
  }

function program28(depth0,data) {
  
  
  data.buffer.push("\n                            <input type=\"radio\" name=\"shippingOptions\" value=\"hent\" checked>\n                                Hent hos Kodegenet på Munkerud Gård kr. 0,-\n                            </input>\n                        ");
  }

function program30(depth0,data) {
  
  
  data.buffer.push("\n                            <input type=\"radio\" name=\"shippingOptions\" value=\"hent\">\n                                Hent hos Kodegenet på Munkerud Gård kr. 0,-\n                            </input>\n                        ");
  }

function program32(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"alert alert-warning\">\n                        Dersom du ønsker å hente varene hos Kodegenet på Munkerud Gård, må du sende oss en epost ti post@kodegenet.no etter at bestillingen er foretatt for å avtale et hente tidspunkt. Henting kan stort sett arrangeres fra kl 10 til kl. 16 mandag til fredag.\n                    </div>\n                ");
  }

function program34(depth0,data) {
  
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

function program36(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <div class=\"btn btn-primary disabled\">\n                        <i class=\"fa fa-times\"></i> Leveringsinformasjon mangler<br />\n                        ");
  stack1 = helpers.unless.call(depth0, "shippingValid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(37, program37, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                ");
  return buffer;
  }
function program37(depth0,data) {
  
  
  data.buffer.push("\n                            Postnummer er ikke gyldig\n                        ");
  }

  data.buffer.push("<div class=\"pageContent\" xmlns=\"http://www.w3.org/1999/html\">\n    <div class=\"row\">\n\n        ");
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
  data.buffer.push("\n        </div>\n    </div>\n</div>\n\n<div id=\"facebook-logo-submenu\">\n    <a href=\"https://www.facebook.com/Kodegenet\"><img src=\"/figurer/facebook_logo.png\"/></a>\n</div>");
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
  data.buffer.push("\n                    <tr>\n                        <td>\n                            ");
  stack1 = helpers['if'].call(depth0, "event.hasSpotsRemaining", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        <td>");
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
function program24(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'checked': ("event.meldPaa")
  },hashTypes:{'type': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</td>\n                            ");
  return buffer;
  }

function program26(depth0,data) {
  
  
  data.buffer.push("\n                                (Fullt)</td>\n                            ");
  }

function program28(depth0,data) {
  
  
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
  stack1 = helpers['if'].call(depth0, "session.session.authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(28, program28, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
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
  data.buffer.push("\n    <div class=\"shopping-cart-header\">\n            <div class=\"row text-left\">\n                <div class=\"col-sm-2 col-md-2 text-right\">\n                    <span class=\"fa-stack fa-5x\">\n                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n                      <i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>\n                    </span>\n                </div>\n                <div class=\"col-sm-4 col-md-4 cart-summary\">\n                    <h4>");
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
  data.buffer.push("\n                    <div class=\"col-sm-6 col-md-6 cart-toggle\">\n                        <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doHideExtendedShoppingCart", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Skjul Handlekurven <i class=\"fa fa-caret-square-o-up\"></i></span>\n                    </div>\n                ");
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <div class=\"col-sm-6 col-md-6 cart-toggle\">\n                        <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doShowExtendedShoppingCart", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Vis Handlekurven <i class=\"fa fa-caret-square-o-down\"></i></span>\n                    </div>\n                ");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <div class=\"shopping-cart-items\">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['shopping-cart'] || (depth0 && depth0['shopping-cart']),options={hash:{
    'cart': ("session.shoppingCart"),
    'orderSuccess': ("orderSuccess"),
    'user': ("session.session.user")
  },hashTypes:{'cart': "ID",'orderSuccess': "STRING",'user': "ID"},hashContexts:{'cart': depth0,'orderSuccess': depth0,'user': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "shopping-cart", options))));
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
  data.buffer.push("\n                </ul>\n            </div>\n        </div>\n    </nav>\n</div>\n\n<div class=\"facebook-logo\">\n    <a href=\"https://www.facebook.com/Kodegenet\"><img src=\"/figurer/facebook_logo.png\"/></a>\n</div>\n\n");
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
  data.buffer.push(">Epostlister &#x25BC;</span>\n                <span class=\"next-page-box\"><a style=\"color: #fff;\" href=\"/medlem\">Bli Medlem!</a></span>\n            </div>\n        </div>\n    ");
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

Ember.TEMPLATES["julekalender"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div>&nbsp;</div>\n\n<div class=\"pageContent mediumBottomPadding\">\n    <h1>Velkommen til Kodegenets Elektroniske Julekalender!</h1>\n\n    <p>Dette er første året Kodegenet har laget en egen julekalender! I julekalenderen har vi samlet alt man trenger for\n        å lage et artig juleprosjekt med elektronikk og programmering. Den passer fra 12 år, og er vel så spennende for\n        unge som for eldre. Gjennom 24 dager åpenbarer det seg nye komponenter og byggeklosser som settes sammen og\n        programmeres til et artig og lærerikt juleprosjekt. Den perfekte førjulsgave for den som liker å ha noe å sysle\n        med.</p>\n\n    <p>I Kodegenets julekalender har vi samlet alt man trenger for å lage et artig juleprosjekt med elektronikk og\n        programmering. Den passer fra 12 år, og er vel så spennende for unge som for eldre. Gjennom 24 dager åpenbarer\n        det seg nye komponenter og byggeklosser som settes sammen og programmeres til et artig og lærerikt juleprosjekt.\n        Den perfekte førjulsgave for den som liker å ha noe å sysle med.</p>\n\n    <h2>Ny video guide hver dag</h2>\n\n    <p>Hver dag fra 1. desember til 24. desember vil en ny video-guide gjøres tilgjengelig her på denne siden. Video\n        guiden forteller hva som er i dagens kalendergave, hvordan den brukes og viser et eksempel på hvordan delen kan\n        programmeres med Arduinoen.</p>\n\n    <div class=\"row\">\n    <div class=\"col-md-12\">\n        <h1>Luke 24</h1>\n\n        <p>I dagens kalender finner vi baksiden til julestjernen. Dermed er julestjernen ferdig bygget, og programmert. Du kan leke deg med hvordan lampene i stjernen er programmert, og er du riktig heldig, kan du kanskje få lov til å sette den på toppen av juletreet!</p>\n\n        <div class=\"figure figure-md\">\n            <img src=\"/figurer/24des.gif\">\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <h1>Luke 23</h1>\n\n        <p>I dagens kalender ligger det ett veggveste til julestjernen. Denne kan skrus opp i for eksempel vinduskarmen slik at julestjernen kan henge i vinduet :)</p>\n\n        <div class=\"figure figure-sm\">\n            <iframe src=\"https://player.vimeo.com/video/149856772\" width=\"750\" height=\"561\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <h1>Luke 22</h1>\n\n        <p>I dagens kalender ligger det en plastboks til alle komponentene. Vi fortsetter med å programmere julestjernen. Under finner du link til ferdig kode for i dag, men prøv deg frem med oppgavene i videoen før du ser på den!</p>\n\n        <ul>\n            <li><a href=\"http://blockuino.no/?xml=DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD4AoKFGAAjCNQDGAaygYAntgCmqAIa0AJgFcAlnGoB9bFpAKIehBlpbseneIga1ClDFQUA7M9moAtG4BsvAKCQnAKIBj8wcEiYlIy8kooqpo6%2Bo52qgp6AG6qWsqiWURaGGg5yvZOkVHRAGZaJmpQcMpgiQBqAIIASrwQCmoACjrA%2BPWN1TVC4xBNLW2ocoq8OhijM2qTNcC5lc2tHZ0AMgCqAKKBU1ExEtJLicnauuWWBf3llZdX1xv7Cyi5V6FD4aKoAFnWDVmWymo1Etxh0Xwu1BiMEwFC4TR0XhcXuKnUTzSCgytCygPywOKpRBVSC33Rv3mh16PAgrUUtEhE3pDOATIOiwSKzgazGUM2vO%2BOwqoL%2Bh1OF2xsNxdwSBJSzwpb3JsrpDKu%2FIl8tQ2uBKKqfm50KlfPwquVSItjvRmIitulqviig1RIMRhMZgsVi%2BBp%2BxuZqAAKgBNQZKgByZwA8npugBxABCAGok6mANIACQAWgAOAAM5etkrD2wtJpQCZOAFk9IMAJIADTORwAyqHazjYmqfUlCakXpT%2BgPB3UI4KUF1WeywJzqy7Dfbhxvrsi9TvovXIygOwmZ4Obnj1WPNfozdOD7CBf8l30BsM4OuPWG4dvv9K90qR8QjCd1Z2uL18RvP0EAUDANGwc9Z2AcxlAwBQ2lFBtYPgxDgJVYdvQecdnkMYxTHMSxrGEBR6B0JDwNdUD8L5SDr0eCcyMDSirDMNBqCIXhfwRf9wNGN0WN3B1RINUZUPQzCwMY6IJJkn82NHDjnjEag8LU2sUIwNCMIULDjx0vTlNYwioK0%2FRajoBirMZecXx6PoOQUds4EcEAv2cvkjwXAAxbpk2bJyAqEDTiNvScdVpSKoumVzEnvXVPh4KtxR5ZKAOkvLtkA1F9LEoL%2FijZMkucy8R1iv10sSySL2fNK8gSi1eCtHKbUK2EtxEvqnX3UrkPkkyzIXXso06KMzmbM4EyjaqrNqojfU4gMKODaxxGoMRaBWmrysSDtuyOI6ArW2ySLvdrCkuqKjUaBtXzZTzvN8%2Fyhs3Aqft3Z1RuUmU9mPbozgAEUe1aYo2rV7veTrmsY57ZgbRqkYAJgAVmx77%2Fqkv8CeGoCgZRk7UHTcHFuh4HYegicMb1WnVta00EYy0FeGyjZkYvAapD52TioUIXAr1BtM0VFmxPpuz4vNZmxYMtmAQ5pqeYlZW7T%2B4nRkB4mmKxMm6Zs9jbv9cigyoviBJllHVMNw05Ytxx2Vke2atVt3lA9nhsc13KnaK3Xg%2FE5iTZRgXJG1%2FrHYJ4TBcju1xsU2OQONvWXbihzDvT8MXuPN6V0UT6wnxhOKZQULws9gzs4a9WkeTlHVaZzLA96sPo%2FzkmSqdkG5WPSq6%2FUs3NIt9uud7p9UvZoFEaV7reZb%2FnQ%2F%2B%2FWRoH1PTIwBtptm%2BbFuWmeh1udaGdIrbrd4vaDtHgyq7OnsH4vBvGY51%2FkNV4uPp88ueo1mDoTQawChAi1PtcKu4MoaQO2O%2FeGC9Ob6jAQXNGx4p5VE7kA1BicY6r2QhAghF4q5UzODTOBEFx71Q%2FkgpqxDW5zzVnQrGuMK7ALwZQ8BBswGDwUJLaWXD0QILuiwpWDCxJtybkrbBQjwHr0NpvUmuD464JEZbbiO1baCTkUbJSqCqHnxunFH2fsJGsyYaY3gAd2EGM4eY%2FmqjeE9wcQBJxesXED3wDvUUvd7Eb3wO4p6ni8pySMgpXefN%2FE1UCRHVaITCFBPykTH8sTM46xSXHOJIdMngPjvY0YsAeBAA%3D\">Koden fra Luke 20</a></li>\n            <li><a href=\"http://blockuino.no/?xml=DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD4AoKFGAAjCNQDGAaygYAntgCmqAIa0AJgFcAlnGoB9bFpAKIehBlpbseneIga1ClDFQUA7M9moAtG4BsvAKCQnAKIBj8wcEiYlIy8kooqpo6%2Bo52qgp6AG6qWsqiWURaGGg5yvZOkVHRAGZaJmpQcMpgiQBqAIIASrwQCmoACjrA%2BPWN1TVC4xBNLW2ocoq8OhijM2qTNcC5lc2tHZ0AMgCqAKKBU1ExEtJLicnauuWWBf3llZdX1xv7Cyi5V6FD4aKoAFnWDVmWymo1Etxh0Xwu1BiMEwFC4TR0XhcXuKnUTzSCgytCygPywOKpRBVSC33Rv3mh16PAgrUUtEhE3pDOATIOiwSKzgazGUM2vO%2BOwqoL%2Bh1OF2xsNxdwSBJSzwpb3JsrpDKu%2FIl8tQ2uBKKqfm50KlfPwquVSItjvRmIitulqviig1RIMRhMZgsVi%2BBp%2BxuZqAAKgBNQZKgByZwA8npugBxABCAGok6mANIACQAWgAOAAM5etkrD2wtJpQCZOAFk9IMAJIADTORwAyqHazjYmqfUlCakXpT%2BgPB3UI4KUF1WeywJzqy7Dfbhxvrsi9TvovXIygOwmZ4Obnj1WPNfozdOD7CBf8l30BsM4OuPWG4dvv9K90qR8QjCd1Z2uL18RvP0EAUDANGwc9Z2AcxlAwBQ2lFBtYPgxDgJVYdvQecdnkMYxTHMSxrGEBR6B0JDwNdUD8L5SDr0eCcyMDSirDMNBqCIXhfwRf9wNGN0WN3B1RINUZUPQzCwMY6IJJkn82NHDjnjEag8LU2sUIwNCMIULDjx0vTlNYwioK0%2FRajoBirMZecXx6PoOQUds4EcEAv2cvkjwXAAxbpk2bJyAqEDTiNvScdVpSKoumVzEnvXVPh4KtxR5ZKAOkvLtkA1F9LEoL%2FijZMkucy8R1iv10sSySL2fNK8gSi1eCtHKbUK2EtxEvqnX3UrkPkkyzIXXso06KMzmbM4EyjaqrNqojfQnBzaBWmrWtQV8eFqVR6AUfyhrrPUG1C8KdoCtbbJIu92vNPVbqio1GgbRrOqys7zqKgr%2FuGoDRuUmU9mPSq3tWmKNq1Z73h%2B0G7r2gEEYy0FeAAJgAVhxv6gfRAapGagzioUUmf3GxSG2m2b5sW5bKYM2HoM4gMKODaxxGoMRtuZi9ysSDtuyOaH3tZuz4sKcXko%2B2YGwOldFG83yCcJqS%2Fw1ornWRmqhdQbozgAEVlmrJce6WHz1uXUYOo6GFOnqa21gGtddondY99EDZQdMjcWs2YZs9jLe%2B16BcY%2BW5gXcPMuyjZI4vYnJCT2TybTwLLuPTNFSDsGLbiuPMczgzUeLqoE4lUu7UBj3Ri972MWYm3zZDzTLa4zmqL4gT89W1TvcNQu%2FUcdlZH797UbH5QJ54LH1aHoQU5r9PB6X4SSdbqP8HX7XN9T7ef3wanTKU%2F6D8zuSjIUs%2Br73877tDuKtsn6U7fctlPNVsJF6G8G5THmuhFVeQ5bjrTZvDIEiMI5H2QuXdGTUq65VdpfOBdpG6EwAQoBsUNQHohHhOCub8fwIOgRjS0f9H4r3QQBTBQNDLGRpseOmc0FpLRIZ6du9VNqOXwXOT6x57bHSdonWhP5fbAM4epbhcMnrkKauI%2BBqVTSIJ%2Bsg3qG8aFDwbiNHRvs8FKJkeAh6Rc1GwKXgIhWx5iHzzxlQrB2im4ZyMdKU%2Bk1%2FisIZhw%2FhEFZGQP0F3IMPceZ82kQZX2IsezhIvIQqBU59SWO2B%2FZc38fK%2F2dr4zcdctH0P0dnBcRtTZZIIiY5%2BDVzGZVcWJMhCSmq43xpk6pZMck6JcUkoQvt%2FZnEDiU7YcT5EJJicowRC5hGOwcagpxljdEgw6dghsudzjDOMVeDuZiFFIw6eGUZ%2FxbEaJdvM6ZuS9FJObliZpqy6pyP9ORYJvEED8UEn02ED9tnRX8VLGec9LlR2niYWe2NJltNaWc3eLd3loKOW8qZoLHHuPPhrKFSKT43wmoii%2BMKL4DL0K%2FLJ0dFaf2Vl5dJfkmn5IhiFMKIDfn9M%2BWHSpJdaVPhUWjTZEcDl9ORfXdpTcDFVS5Ti2xzLkmstsd1MRMzjn715fXBFtMZpsMZis0payeHPDxSKnZ1ixmfwdidYFDDJHUpVdZMp6yKnsqqe8lyuy2pWpLpyrVbtBpgryXygpFUBXOr8ea9VgyOoWJtQSmxjKqgNMNY4uFUz3VyrRcwqairvFMx9WAtVNygk8W5rzPhqbriRK7NEl5w96UbKGcW9%2BrKlZpLVuSm1RNo1tNjRvX2RTTUs38WANCZQ8ilDaBgLQ4h20tVZcmQYvBmztibL2SNHrKX%2FE6MO5CQqw1LpqWK1ddjGmSvrS6reu7gYlQPT7T1iRMxro7X6m56UL0jrtftPVIjZ0gvdge2ZR7d3cu2e%2BimebDyntQN03pf7fXpoCVbCht7K33rZXUn6Ea631q%2FUc5tFLAELiWUqEDabrngZvRWw0KTeD6tEdXbDDbX3ftld%2BrFZycWZq5r3Z55GVIQuPQQ0to8AU%2FPY9qmO%2FxvlAsQ8e5DwbwUXLfdKsFtGeWNpRQirlUn4XxrviK85GLUE4s1fMojX9VwktrTumZxqboEafhaohm7sMhtjpup1kKlMxtOcZgDKBDGQpXQ6xJkLamBsyhKsjDm5OONQ0i%2BVLCk3sJTR5zjvD%2BbWd0yR59RrXNSII6B3DUthXsZs3szdCGjNieC05uZwb%2BVQbpVevDVmcu%2BZevHZLUbKMoec9%2B8Lib6ZRYqxliBUsGMhJzfFnLBbRbdZLVVrL6MxvQZ1W5VJ%2Bmf5ksK5J4rTbWtIdbSbablWwOTa89tllMH9mNdhc1sToWXPzsSEBs86Xxu7YZeQg7oqYPjINcJlbZ2HMXZba5zDz2OMTce3BoNvGUpHfy%2FYj7n7HMtdK2%2BmT376Mc3udYR5fc7vSkR0hnFgnMekNZXjhe0Ocuw7E9jsFq3nEU9k19rRCm%2F2iZ5Qz%2BZNOGFadzUh3TxLFsnf%2FiZmlb7PMg%2BtSJurMCGsk8p3Ttb8Pv3lfx%2BZ%2F1EHFG1Y3ftngAWUFIbJzyn7%2B92ueMi8qxXHOhti6rY%2BiZUv5kC4Bx8oHZa%2FNMrB7a2b9qRclwK4F3jTOqP67nehr19ulfXpq673LHvneVz5yiqnev1vBsN4kLxXX8c9dMX6frvFQmc4jyNotLGuGO8teWovfJuc1oyct33uv%2FeJ7fZt4p5fVWZeB9H%2B3h33eqI1%2FZ13FHXVg5%2Feni6V3AMB1uy3nbbenf1Zd%2F3qx%2FGo9z5jzbmH8eTly%2BG39vOI%2FW%2B9fbzLPfhHLesiS2vnXG%2FZcfqH2z%2BZyO7lZqY537Yd%2Fg24%2B4y%2FmbS%2FUBE9j1Kq%2FaTNjfvP3HXN%2FWnQfGHFndfGXZxaAo5QAuWcTDTGVRAsGZA%2FhUAvKcSYA6hNAgCcA2uWA5CVFJhVTJAtAnAiTdAjfKglA7JYg5eRHP3OgxEL9VgoINBUYWAHgIAA\">Koden fra Luke 22</a></li>\n        </ul>\n\n        <div class=\"figure figure-sm\">\n            <iframe src=\"https://player.vimeo.com/video/149709413\" width=\"250\" height=\"187\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <h1>Luke 21</h1>\n\n        <p>I dagens kalender ligger det en stor 3D printet julestjerne som passer til LED lysslyngen. I dag skal vi montere LED lysslyngen inn i stjernen, før vi kan fortsette å programmere lysene.</p>\n\n\n        <div class=\"figure figure-sm\">\n            <iframe src=\"https://player.vimeo.com/video/149495553\" width=\"250\" height=\"187\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <h1>Luke 20</h1>\n\n        <p>I dagens kalender ligger det en LED lysslynge. Denne har 6 LED lamper (av type WS2812b) som hver har en bitte liten mikrokontroller i seg. Dermed kan vi programmere hver lampe til å lys i alle mulige farger bare ved hjelp av 1 dataledning, pluss 5V og jord.</p>\n\n\n        <div class=\"figure figure-sm\">\n            <iframe src=\"https://player.vimeo.com/video/149494871\" width=\"250\" height=\"187\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <h1>Luke 19</h1>\n\n        <p>I dagens kalender ligger den et 9V batteri og en koblingsledning. Dermed kan vi gjøre Arduinoen vår mobil, slik at vi kan kjøre programmene våre uten at Arduinoen er koblet til en PC.</p>\n\n\n        <div class=\"figure figure-sm\">\n            <iframe src=\"https://player.vimeo.com/video/149493559\" width=\"250\" height=\"187\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <h1>Luke 18</h1>\n\n        <p>I dagens kalender ligger det et sett med hunn-til-hann ledninger som vi kan bruke for å få sensoren vår til å bli litt mer mobil! </p>\n\n\n        <div class=\"figure figure-sm\">\n            <iframe src=\"https://player.vimeo.com/video/149492393\" width=\"250\" height=\"187\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <h1>Luke 17</h1>\n\n        <p>I dagens kalender ligger den Ultrasonisk sensor. Denne består av en høyttaler og en mikrofon som vi kan bruke til å måle avstand ved hjelp av lyd!</p>\n\n\n        <div class=\"figure figure-sm\">\n            <iframe src=\"https://player.vimeo.com/video/149493391\" width=\"250\" height=\"187\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <h1>Luke 16</h1>\n\n        <p>I dagens kalender ligger det en Thermistor og en motstand. Thermistoren er en egen type komponent som varierer motstanden avhengig av dens temperatur. Vi kan dermed bruke Thermistoren til å måle temperaturen i rommet!</p>\n\n\n        <div class=\"figure figure-sm\">\n            <iframe src=\"https://player.vimeo.com/video/149491459\" width=\"250\" height=\"187\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n        </div>\n    </div>\n        <div class=\"col-md-6\">\n            <h1>Luke 15</h1>\n\n            <p>I dagens kalender ligger den en 3D printet holder for det medfølgende knapp-cell batteriet. Sammen med den, en LED lampe og en av LED hattene, kan du lage julepynt til for eksempel pepperkakehuset hjemme :)</p>\n\n\n            <div class=\"figure figure-sm\">\n                <iframe src=\"https://player.vimeo.com/video/148993067\" width=\"250\" height=\"187\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <h1>Luke 14</h1>\n\n            <p>I dagens kalender ligger det en 3D printet stjerne, som du kan montere på en LED lampe. I dag er den ingen videoguide, men se om du klarer å koble opp en RGB LED lampen, og programere den slik at den veksler mellom rødt og grønt, eller at den dimmer mellom røddt og grønt.</p>\n\n\n            <div class=\"figure figure-sm\">\n                <img src=\"/figurer/liten_led_stjerne.jpg\" />\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <h1>Luke 13</h1>\n\n            <p>I dag skal vi lære å bruke en buzzer for å spille lyd fra Arduinoen. Vi begynner med å lage en enkel lyd, før vi avslutter med å spille alle tonene i 3 oktaver. </p>\n\n\n            <div class=\"figure figure-sm\">\n                <iframe src=\"https://player.vimeo.com/video/148747053\" width=\"250\" height=\"187\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <h1>Luke 12</h1>\n\n            <p>I dag skal vi lære å bruke en transistor! Vi starter med å koble transistoren slik at vi kan bruke 5V og 3.3V portene på Arduinoen for å styre transistoren. Deretter kobler vi om og lærer hvordan vi kan styre transistoren fra Arduinoens digital porter.</p>\n\n\n            <div class=\"figure figure-sm\">\n                <iframe src=\"https://player.vimeo.com/video/148709866\" width=\"250\" height=\"187\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <h1>Luke 11</h1>\n\n            <p>I dag skal vi bruke snøfnugg LED hatten og juletreet, og programmere dem med trykk knappen vår. Vi starter med et nytt prosjekt i Blockuino!</p>\n\n\n            <div class=\"figure figure-sm\">\n                <iframe src=\"https://player.vimeo.com/video/148647287\" width=\"250\" height=\"187\"  frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <h1>Luke 10</h1>\n\n            <p>I dag skal vi bruke 3 lys sensorer for å lage en elektrisk farge-generator. Ved hjelp av lys,\n                lyssensorene, RGB LEDet og det 3D printede juletreet, skal vi programmere Arduinoen slik at vi kan lage\n                alle farger (65.536 av dem) ved å flytte på fingrene våre over lys sensorene!\n                farger!</p>\n\n            <p>\n                <a href=\"http://blockuino.no/?xml=DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD4AoKFGAAjCNQDGAaygYAntgCmqAIa0AJgFcAlnGoB9NQvERVCvQDdVW5aLNEtGNBeUQNClDFQB2AAwfZqAC0AKwsvAKCQgBmWgoQalBwymBKKABqAIIASrwQCmrA%2BDFxavyR0bHxicmpcoq8OhiFxfFlkcCWrgrVKaiZADIAqgCi4eWCImJSMvKpqpo6%2Bpa01rbOXWPjEy0JSb0oy6t56268TEzNlaUR5YWiEpJtE%2Fidbk9CcAogGO8T99N1ObqbS6AxGEy0MyHGzHeyOE7uX7tHY9VKZHI8PJqADitGocDglxKSO2V1RqEBDTgTSKVxJQle3T2aIyQ1G9L%2BU2kgJUwMWzhWMKhLlOHORZOZqGha0ZZx8RNaNy2Qnw%2F0eStuLxFCnpwE%2B3zFkweM0UvIWoMMxlMAqOdgcTllYtJJXJ6WyuXyACETArrsrxsAUZKUJSeI1fU6GdrXQMRpt%2Fbc1SageallYhQj4wnbkGalL0zLtbwWBGNQm7lzI4VGVX9T8y%2F6jQDZmaQfpLRDhYK1nCHUXIzmJXm3Rj4rQLrTiQ3y7n9qHw5PFdmth1o8HY%2Bzp9mm9yWyh5m2bRnHVvl4Gh%2FtpcdHfLF37lyvVZXT4%2Bay%2BA3WBwGkzz93zQQgCgYBo2BZg%2BtwIBgygYAoKTUq6gHAaBX6Nj%2Be4Hvy2A6GA1CGEethgeBK6zqkAAqsy8AA8oMpEAAo0aWRHboyrq0QAkgAcoRTHflyyatvyV6Iu%2BPHni667upi%2BSMTx5ZPg8KFyW%2BsnKnqXz1ipqF8b%2BGGglhcA4XhQncZpzpVMG5H1Dw1F0Qxd6KQ%2Bq5dKxnEmaZnLGjp%2F5pt2eRue5Zm7MO6Iemo3rKDJAWPmqDlnlqXSxdun4ibJO78X%2BqZ6Pphldra%2FkBWJ5nDpZiI2fRpGRVFK4scG7FcYlTFpV5mXGQ1okkX0klYri%2BKEvZKWmRWCkDal8VvCNonJVV25oaaGWHtluG5UK%2BXTYVQX7CVvCceVlXTapNXDnVq37U16HefhfltZp60xl1ajjnt%2B2qfJUjXUR1bau94FqQaE3uWdc26fogGChAejCAo9A6LwQ1vf9KmFFNz3Rc%2BKOasjKNw%2BqWP4JjUXY99SPqddhMIyqkHQbBCjUg1v0aQDs0poeYjUMh5MQVBMFwRgrqs%2Bzp1MwJFpaNDUHg0QKwwZdwlY4d%2BzHd9K5C%2FNgkFldHNnh1I6hU9VVk7jynPU5bguRxpEAJq0Zu6NCCrwN6GgotOGIRAnTd2scRkACy7L9JRADqesE69OPG2NOqayu%2BOC9p52ZWoosOC4eiSw4y0EUrB1rkdrlZ1pnnx4erVRz92shVJOJ4gSwenaH%2BcBhHDe3PLqR1Zb1vu4N9sXU79Au9QbvN6pns%2B37ge12t9el42Tcz6pMfo4DzP8onYsp2n0sl7b1U5wrefz45Pcterss7425ddV6Pr9efqPDXf7Rz4%2FEyt6g7dWzbL8ec2QO987ehXZdzWqPX2vB%2FZB1vt%2FFUMVD5KS%2BnAxsi9z7L2Fu2cE1ohKp3tJmYe25L6jgekwNICh1BaEnrbW6wZ5zUgoUvN%2Bbo2TANjoXP%2BmVlBJDEPQPQkJlBqGYcbBhitEGpWPsXU%2BAjKEENyEQuhj8DbQNfAgxRmpYEqJVEbRR9M8FnjEfyUG1hwbYBWNSSRICLypC9mAngFthgAGU5E7xNkyYqwwAAapEzEsN%2FivUE291EjwsZ1Qh44SFkMcSg6eASn6aICdokRokVbiHxBgPEEAEB6C0FELxxswAaC5lofEUA4iASyagJgHgSmpAqTwQoeSCn4h0aJBhbEABifgmmiLjnNLhWhxB6GSWAbApgclSKCSgSitFwEVSgdExsDCMijKcXovxEjOkFWkZiIhYTE4RJUQouZL1YmHJbnvVInolmUJWT5W0uCEnmPEsOLBjoAAswRbw7HWTdKJJylEJXuYjH5vzPr%2FN%2BRMSm3Maa82DAAEUoh0gFXTWG%2BPbEncWqcpYZw1mCgMQiD44uVt0lFMtLlOM2ViPZWigUEpBeNAl7Q8Xm0%2FqSrG1zHYAKAV8waoD2QAAk2LYl5ZS6BByaXPzFWosFhQIXU1poij6LTWk1PlY1FWvT%2BmDOGZCFlDyir7EmdM4V8iFk6u8buNh4jfJn3pYOR5%2BwK5jmIaQ3ZsybWipxbSyONqozOWDBcrlSKfFoJlnc71tq9WpGef2XwHy6QqsBZK%2BlnqA2OWpYc5N8azwyp5q6OFyqk1srXsnCWmKSUpp%2Boy01a02X%2BLDRUO1LJRz5B6jXV1Sa01SvFUmxlHcv7etQarUEfcB5D0zYjHlvB%2BWCqNS%2Fd1nbjknLndE6VXNZUM2BdmqFrphj9DsX2qVha0Ub1LbWmllby0fRrWssdqVyXXwim2iVaM3VdrPWc9%2BnFe1Vv1my4dgDB7ft1RtSxY9J0CqFY%2Bj1HbgWvpg4mxd%2BBN1yo9cguZA6HaGBMLIQD3LxmYeUNhng7yZ2UOg3EvGJMb333humijf1l1kciah0j8GmOUfkYxkOzGAaccBdx0SvGfqIdXTzUmgnZ78ZeqxuKknnjScfNxpdKpF6iuJvRmBz5CiwB4EAA%3D%3D\"\n                   target=\"_blank\">Link til Blockuino koden fra 9. Desember</a></p>\n\n            <div class=\"figure figure-sm\">\n                <iframe src=\"https://player.vimeo.com/video/148463560\"  width=\"250\" height=\"187\"  frameborder=\"0\"\n                        webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <h1>Luke 9</h1>\n\n            <p>I dag skal vi bruke en lys sensor, det vil si en lys sensitiv motstand, for å måle hvor lyst eller mørkt\n                det er i rommet du befinner deg i. Avhengig av lysforholdene, får vi juletreet til å lyse i forskjellige\n                farger!</p>\n\n            <p>\n                <a href=\"http://blockuino.no/?xml=DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD4AoKFGAAjCNQDGAaygYAntgCmqAIa0AJgFcAlnGoB9NQvERVCvQDdVW5aIUoYqAOwAGe7NQBaCgCZeAwUIAZloKEGpQcMpgSigAagCCAEq8EApqwPjBoWr8AUEhYRFRMXKKvDoYGVlhuQHAcAogGLV5ImJSMvIxqpo6%2BobGphZWNql%2Bea3V4ZHRqAnJPKlqAOIaEFUFOf4T%2BdlFsyildjwVG9ktE%2FWNzds7QqIS0kcq6tq6BkYmtGaWtNa24zuk02%2Bxi8xSaWWtGocDgZxqtyBwCmoNQR3KcEqmU2FyRDSauKB93aTy6L167wGXx%2BI1seiIWgwaGGEA0x0RRMEyJBMzBSV4kki2Gw8K2nJ23L2vLRXQxWKmhM5wEsrIUqLi8QAMgBVACigPFlweHWeKB6b30v3%2BqRZbINhsuKOlKCtoxpqt4ABZRYrxRljZJfUj8Cq2UG7lcCRzDW1Hp1FOSLXoEAoMBpsPaHXUEBhlBgFNFMeqU2mM%2BGYwH491Xn1k6nhn83Zms5dQ2rneDyy3YyayWaa%2B9XQCuy3doUO%2FzFmkfdHR3V8AGR36Q8pVUulW31UObW3m3O6pXTeba9v3Xb1w7JePiqhT7bjkwmDP98HF7PRxk2xe8ddv0Se6SCb9hS%2Bglg21rsi%2B%2F6bhOCzvlBxJxkeA6WrSYx%2FlmV7TDeGoLEsqzrNi5zwVB%2Fokhh%2F4rmuJFzsqq5sluaFnpBCFIoefbHoOTH3nurF1E6OF3ruPBMM4z58RKC7kTRH5UWGMndviNwSRK7FAZxoH1qevESXRqrqp2CmkWp1YgeBTYUR%2BAkHJ2%2BHQrC4kqRGUmPJZy5fkZtEwYJ3HCZ5%2B4AVWiYnr59EsU5SLWTEQlhbwLCORFrQuVIblKnJCipf%2BSmZUqJnBe82A6GA1CGOZw7%2BS%2BWHqgAKrKPAAPLatVAAKTUJYlrTeQczUAJIAHI6R1gXIWZ2k5d2UVzJOSztR1SVvnNkkeYtlzZRVxkkkFwFJoVcDFaVY3rQhVXOrVZQNU1rXVbNK1cl1MS9QN40fnl20hY25W3X6k24RCKxrDdX1CMlgZHaR6XPZea1AxGr0aXou37TSH3oWDfEnThZ3HI1LVtURCIw0i92oI9g0w8NHEoWVqOE99PI4bZkL2XC%2BNirTzkLezSXLVzdTQ7zrRw1TiMlcjEFk4TGMHFjvD9VdeitZqOrNYDXN6Qxzqk5DrEU%2BpVOHQLSo%2FZ2grKMKqu82Rrlo05n5hdrtEgw7mH4PzatOzbjtu0DVspZ7Mau7%2B%2FuUZzc0ZN7tse4l4dB5HofHYHUY61HlX4DmeYFgomIUZGynHULZliNQZae8A6f5oWGDqkXJe2694gwhg0IQAgehaIEEsfmAGi5hgWgwlAoQpqgTC8Bk3e9%2F3cCQ%2Br7Y4T1ABirgO7rMRiPQWjiHoDdgNgpid5VP31c1vC6gAihbOvEyg8QHxtSGU2ZahaBvuYQHo3zKGod%2FHdfWvBxWTaI0kwG3ZlLPkCxTbm1Zs7Dm0lyYQwAXA62K07bUVQdfAAQj%2FAKBckxoBfsyMQRAcGH3pgcPq8QACy%2BoeCanqgAdUvujFOYdEFsPjrpdhEUy690zkWZ0AAReqy8kFcjwbWZ%2Br9Vz0j%2BPmam4Uhp%2F36qQl6QDH4gKYqo2ixtprThgWIy4rChrcLDsovq1UACazVaGGMFuovWZkCH0CIdQEhsDgRShwpQmhvAAASPVlh%2BOYcnThPDTHhLCcncu%2FC862xiZXdUupNQAGVbFhwkZSF%2BjIZFEDkWLCydihDmO0ZhTJqEUaKNQbovC%2BiFRFK5MY6OETo7mKsTY0pl5yl6Gca49xDT%2BLkJiD42h9CmEGK%2Br7UGqCWkqSmTPNOfDK4zwjnM7phgTCyE6UbIZqANnKC2TwCgYkJkmKiQnVZ4NzmyQSVnOJqdrnLkucuR5klnmSVecDd5wNzkxyTkY%2BOfy87zL4BkWAPAgA%3D%3D\"\n                   target=\"_blank\">Link til Blockuino koden fra 8. Desember</a></p>\n\n            <div class=\"figure figure-sm\">\n                <iframe src=\"https://player.vimeo.com/video/148344811\" width=\"250\" height=\"187\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <h1>Luke 8</h1>\n\n            <p>I dag skal vi bruke en trykk knapp og bruke Arduinoen for å måle om knappen er trykket ned eller ikke. Vi\n                slår deretter av og på en LED lampe når vi trykker eller slipper knappen.</p>\n\n            <p>\n                <a href=\"http://blockuino.no/?xml=DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD4AoKFGAAjCNQDGAaygYAntgCmqAIa0AJgFcAlnGoB9NQvERVCvQDdVW5aIUoYqAOwAGe7NQBaCgCZeAwUIAZloKEGpQcMpgSigAagCCAEq8EApqwPjBoWr8AUEhYRFRMXKKvDoYGVlhuQHAcAogGLV5ImJSMvIxqpo6%2BobGphZWNql%2Bea3V4ZHRqAnJPKlqAOIaEFUFOf4T%2BdlFsyildjwVG9ktE%2FWNzds7QqIS0kcq6tq6BkYmtGaWtNa24zuk02%2Bxi8xSaWWtGocDgZxqtyBwCmoNQR3KcEqmU2FyRDSauKB93aTy6L167wQCgwGmwgKJlwQGGUGAU0UxqJQVJpdMJDMEbUenUU5Le%2Bm5wz%2Bo2OiP5rUsEA0Ck54L5crqDw6zxQPTFkv%2BYzV6rqKJmYKSEPS2POsuNAvwmskRv5GQVSudDOAbuVZtQvwNP2Uipldrugq1ZJ1rz6%2Bulw2D9NDl1NxT9I1s8aVvCYTHhWyTlwdJI9RNdQfdtvVVwJleN4dJIqjFPF1NjAJLcq95Z9qbiFo7Vcdwu60fe%2FuliYLO2RIN9fYWS1W62tCKnYaLjwHnvw3q3pe9nPHGe9k7XxKF2t1MaPqUzIbP05TBxvgYTPCYzjze%2B3ju%2F693tZ2tWNwPq0Q6XqOLYYG2hqAQWXbBiq%2FZwVO9bDqK17prBoGlk%2B5oLpC0Kwl%2BKHwRuUh%2FtuAE4fK3aHlhr5ZpRLrgZGV5jgxd6njRuyFHOL5cTwLAkTxrTkU6pFATu3bMXi1yyaWrGNux%2BjYDoYDUIYMH3qJJqzr2AAqXS8AA8gAqgZAAKFkibpdQHnOlkAJIAHLcaJaEQc22nubpM57HOqpLLZdl1OJClUTJknwfiIGhRqJLoU2epqXAGlaS%2BvkeXhqBGWUPDmVZNkrvm8W0YhjmuVlflKSO3mZRFSb%2BXxvZBZCawhWVYW%2FtFZ5lsGjWdrFg2DolXkpepmmBlK7a9ThzXTIZxkFRZ1kGZ1XX2XRlVuSNoaeWxkE%2BXtTU5fOlpQjCcIlSddbhXNoH9RWm1iT1L1CPgw0Pft91lRkX2hRkb0eZ98nfeuwMPv9YNQ79qGgzWZGQ1W%2BBMiybIKJie7AX%2BB3KUdYjULy4PAGjrLshgnKE8TUO1Rh7yBHQ1VVmdqoVJjCBaKyWJTI1CFKpyABiiQmQAsszdZ08lmEzbeJ4nQt9Gy4xxyfjd4PTnDsPUY9DmGSZEujReh31Zx8sa2GZ0CfLTDeI4G19Vrjs61DZMYxyc4AMoGfEBkAKKi37LkGYbnZSypejKJEYj0HoRB%2FKyodVnrBzObtFtIuHR0NRnuH6QcbVWrzuea8j83SQNJdbRVrXxAAMmZftJ5LY0m3qOd%2Faz%2Fbs4gXPUg75dl49FfPR5AN2XjdV6oYJiyM3QFnTPyhzzw3hq8XgNO%2BX4%2BD8WucZG7FN8zvj1Z95jO0PPnpdwsPec9zA99SnMTC2LV8sa3%2BOm8rglV4%2B%2BcxGtt2Xg68cR%2F26nvPyI8FAK2frlA2t1zwRi%2Fu3M2wDEECitmgt8tt7bq03kPbWUU%2FKH0xpTL2Pt%2FaB2Du%2FT0Z89RRyDNQWO8c%2B60JdHAlAad2Fh0%2FlPGWAYeEswAXMfsi4iLXQ3l1IGkD4pPRgeA8qAtAr10bkIuhfD6b6A7i9RWKjb6Yg5n3HmYDNoyM3IosKLsJ4n0BvQmMS8V6WP%2FgFXsjjeBr0fjxcxFFnEfVsTRHxEkoGkKxuAnGljJ5aL0BfdRlsRHnROIY3uD98FyM4a%2FcWGCErGxQQIuM5t3p6N7EAnBdsvGBK3iDaxflOEGQQX4gU9iOI%2F0KborBrT0GgJtGYqp3joHZNJsycmZDOTe19gHIOIdslNM0dLd4jCY5xwTjpaRnDuEzMuM07RDE4l1hvpaCpUDCETwGY06uyja4NybpssCcyI46PepghJbNkn337mkopfTTk1LkQEv62yPizz2cI1xBx3Gr26auJ5QTbn%2BJhtI755dQlxUBv8jygLYlwuKQXbubzjFHMCRkkWWTzl3NyfwlpAZf5PL0mCwB2CmK4MJf0k5UDfmAzqQ02lUT5k7M6W%2BMlyYEmlKYlC0qXy2XVOIbolFYzKGTJoXC2ZFLomLOYcsthyqLk9lTlVbV5LkGUv5YIg1wr6WiIIisCRLLTlSs3hytZ20rlqLNSqo10THm0rpS1XFBjWQpI%2BVI71H17U%2FJlTy9FZjAUQqFUiReoRl4ePFW60NsieUI1RbopFIMUWbNhX46GiM7XpsqVGpqOa7rls7JW0sqNhnuyzXdMNYlq0QIsTW8tBakSZsJN2sK48C0ZFgDwIAA\"\n                   target=\"_blank\">Link til Blockuino koden fra 7. Desember</a></p>\n\n            <div class=\"figure figure-sm\">\n                <iframe src=\"https://player.vimeo.com/video/148335176\" width=\"250\" height=\"187\" frameborder=\"0\"\n                        webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <h1>Luke 7</h1>\n\n            <p>Vi programmerer et lite 3D printet juletre ved hjelp av RGB LED lampen. Sammen med juletreet er det også\n                en 5mm RGB LED i posen.</p>\n\n            <p>\n                <a href=\"http://blockuino.no/?xml=DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD4AoKFGAAjCNQDGAaygYAntgCmqAIa0AJgFcAlnGoB9NQvERVCvQDdVW5aIUoYqAOwAGe7NQBaJrwGChAMy0FCDUoOGUwJRQANQBBACVeCAU1YHxA4LV%2BPwCgkLCIqLlFXh0MNIyQ7L9gOAUQDGqckTEpGXko1U0dfUNjUwsrG2SfHObK0PDI1DjEnmS1AHENCAq8rN8x3MyC6ZRiux4ytcymsdr6xs2toVEJaQOVdW1dAyMTWjNLWmtbUZvxutdlFZkkUotaNQ4HATlVrgDgBNgagDqU4OV0uszgi6g1sQDbq0Hh0nt1XggFBgNNh%2FgTzggMMoMApIujkSgKVSafi6YIWvd2opSS99JzBj9hod4bzmpYIBoFOzQTyZTU7m1HiguiLxb8RirVTUkVMQQkwalMadpYa%2Bfh1ZIDby0nKFY66cAXYqTahvnqvsp5VKbTd%2BRqSVrnj1dZLBoHacHzsbCj6hrZYwreEwmLCNgnznaiW6Cc6A67raqLnjy4bQ8ShRGyaLKdG%2FkWZR7S17kzEzW2K%2FbBZ1I69fZL43mtoigd6e3MFstVpa4ROQwX7n33fhPRvi572aO057xyvCQLNdqowfkumgyfJ0m9lf%2FXGeExnDmd5v7Z%2FV9vqzbKyuO9mgHc9hybDAW31f88w7QMlV7GCJ1rQdhUvVNoOA4sH1NOdwUhaEPyQ2C1ykH9Nz%2FLDZU7fcMOfDNyKdUDwwvEc6JvY8qO2fIZyfDieBYIiuOaUiHWIgCt07RicUuaTi2Y%2BtWP0bAdDAahDCg29hKNaduwAFQ6XgAHkAFU9IABTMoTtJqPcZ3MgBJAA5TjhJQsDG001ztKnHYZ2VBZrJsmpRLkiipPE2DcSA4K1SJVCGx1FS4DUjSn28tycNQAySh4UyLKspdc1i6j4Ps5yMp8hSh089KwoTXyeO7ALwRWIKSpC79IpPEtA3q9tov6%2Ft4o8pLVPU%2F0JVbbqsMayZ9MMvKzMsvT2o62yaPKlyhuDdyWPArydoarLZ3NCEoRhIqjprUKZuA3qy3WkSuqeoR8EGu7dtukq0g%2B4K0hetz3tkz7V0Bu9fpBiHvuQ4GqxI8GK3wBkmRZBR0R3QCfz2xSDrEahuVB4AUeZVkMHZfHCYh6q0NeNQtHoLRGQgPQiB%2BZlDtB0qFXZRztq584acS9CpswzLdL2FqLQmIaAcLAXbUo%2B67O7Pm9IATXMgBRSqAKFpS9DQBm0D0MQiF13aTqc2IAFkdZ4AAJBzFgdtaeph6GlYhv6qJxmqdXpxnmdZ9nJr9C2AJVvY%2BYj3b9YOuqFewiXcLOtqrqTycPd9yS%2BszjaytV5yNe12O9ZG%2FbPKN%2BgTbNsvLZT1Brbt3gABkjIAdTd2bs57r3fZ9qqK9xzzA6ZgMQ6ZsOx2uguea2%2BuGvj2q6MX2CTql87CIz9a5fXfOs%2F7nyo6iNXNftg%2BQ2XnVq9r6hzdn%2B9G5QZv7fbrud46veyMvkSj7cwesU%2Fa016MEZQsg17HWfoYEwECeAACZnBIO7jZLGv95LD39lGMewc2ZT05q9bmXZo4VUfkxTBICCGEKfn5ZqvZAqf2obaRGr0HoKDIQiE%2BqAz6lw4Rgs8lcb7G1NvfSBs0ra2zfp3FBu9e5PTYXwycgDqHAOFnTBm48WZ4I5onJh5wuEoBjoo8hAiR46l0XokMG96GtUXDLdBX0WFMIUQ4isBieEX0sYLChaj9C3xEQ%2FVxDdaF7FfrwJ2LsZGEO%2FmJLxisIpxKEMoyxqiDY4Into6e01ElEN5qQoJS8fEGwsTkxMz9N4EUuvY0pz15Y1Lev%2FLxcF55FyciXTx9TTxhjMVGfxddjHBKaqEyRbdpGMJqTEgZTpc6PQmckxJqSDowPAWIoBJ1llwMQcg8Z9S0GdO8aYrB6ig4ZNDlQ%2FZuSF5TJXIsleostIXJoUM1O8wUhRN2XI%2FZLjHmXNae01ZrDr69OEf0gpXE5rsjCTwd%2B7yJmfM6d8n5fJ5kXNuQHDRuCzklKRXPYhp98k4qvkUhOq9rm%2B2sXhJY6dqmEvzE4pFiLaVCHccXc%2BALnFAteH00RZLxHPyhTCnZtLJlgpzo0n5eymVxUOZQ9JWisWktFcfTarT2VNM5fobFUqykhJefOSpsKGXwsJYy7VzKVUkLaWy3lvsNWGxBTypVaz%2BUjMds7V2QrtUirNSFcVJqUVMrRdgsBcCnX%2FXWSG3gWz3yerNZKn1k47VysnjoxVCbdwWvxfzdN7o7VapzU8%2BaksbHSyxGG%2BRxqE2moLXyFlVreHlt3na7lgSa3J11U3V1ESPU0rbbU%2FefbfUJMHUkqGI6%2BRJoxac%2FB%2BbB3NLxdwgl46DndKOZqtNy7C0IUpQuQ1ObvWboacOzd868n1o6YerpdY132prgEtVOKIUzihd2vd6aD0npmewxt8iA19qDcczRKasli0vbWzNi7s1gZAsSu54cbVNIpWdA1sbP30uXdWw9p6tr%2FIQxy2DQi72gug1u59rrBW9pIx%2BsDmGT1%2FvHQB0BsCH2BojcxhBSCY2UZI6O%2BGPGV3XtlVO%2BVM6N38f0RBwxS7xOJoIyLeDP6vlIdeaWq0MmwZ1PU0OvOWncVntw4piZzaHWtt0zq55naW5usiah%2Fj1H1O0bs%2FRqjk6TkidTfclj%2B661eYLYx85ZnSN0J3dSstgWs7oYc1%2BvDuy60GfCwJhKBsW2%2BZrU%2B7sL73Vvqo5W8TjmHPOby65oDmSAsJfA4XS1qW23%2BdneVvkyn9UXWy3l3LWn8tmew3861hmGXGaI46%2BrCIJFWYo2Fob%2Faf4TfiTp6b8a5tJsjTFx9bGVkce2dxob9nyuQz4%2FV7bundsxUCwduzcNjsydO5eo7y3WFtZq%2Bd27QD7tVse711BL3A1vbnZ9iV3392%2FY%2BYVhFgO4k3fe%2B2UHKj%2FuPKu2DmHcLIvOIR00qHOdgc%2BTRzclHX8scSQx7DJH0MCc3SJw1HH2OyeQ5J3SzTJESZowxndOHWdgcs7en%2B074OIt0452OkVaRYA8CAA%3D\"\n                   target=\"_blank\">Link til Blockuino koden fra 6. Desember</a></p>\n\n            <div class=\"figure figure-sm\">\n                <iframe src=\"https://player.vimeo.com/video/148065401\" width=\"250\" height=\"187\" frameborder=\"0\"\n                        webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <h1>Luke 6</h1>\n\n            <p>I dag er det klart for å pakke opp en kul 10mm RGB LED lampe, og programmere denne med Arduinoen! RGB\n                Lamper består av 3 LED lamper med fargene rød, grønn og blå inne i en matt kuppel. Dermed kan vi få frem\n                alle farger vi møtte ønske oss!</p>\n\n            <p>\n                <a href=\"http://blockuino.no/?xml=DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD4AoKFGAAjCNQDGAaygYAntgCmqAIa0AJgFcAlnGoB9NQvERVCvQDdVW5aIUoYqAOwAGe7NQBaJrwGChAMy0FCDUoOGUwJRQANQBBACVeCAU1YHxA4LV%2BPwCgkLCIqLlFXh0MNIyQ7L9gOAUQDGqckTEpGXko1U0dfUNjUwsrG2SfHObK0PDI1DjEnmS1AHENCAq8rN8x3MyC6ZRiux4ytcymsdr6xs2toVEJaQOVdW1dAyMTWjNLWmtbUZvxutdlFZkkUotaNQ4HATlVrgDgBNgagDqU4OV0uszgi6g1sQDbq0Hh0nt1XggFBgNNh%2FgTzggMMoMApIujkSgKVSafi6YIWvd2opSS99JzBj9hod4bzmpYIBoFOzQTyZTU7m1HiguiLxb8RirVTUkVMQQkwalMadpYa%2Bfh1ZIDby0nKFY66cAXYqTahvnqvsp5VKbTd%2BRqSVrnj1dZLBoHacHzsbCj6hrZYwreEwmLCNgnznaiW6Cc6A67raqLnjy4bQ8ShRGyaLKdG%2FkWZR7S17kzEzW2K%2FbBZ1I69fZL43mtoigd6e3MFstVpa4ROQwX7n33fhPRvi572aO057xyvCQLNdqowfkumgyfJ0m9lf%2FXGeExnDmd5v7Z%2FV9vqzbKyuO9mgHc9hybDAW31f88w7QMlV7GCJ1rQdhUvVNoOA4sH1NOdwUhaEPyQ2C1ykH9Nz%2FLDZU7fcMOfDNyKdUDwwvEc6JvY8qO2fIZyfDieBYIiuOaUiHWIgCt07RicUuaTi2Y%2BtWP0bAdDAahDCg29hKNaduwAFQ6XgAHkAFU9IABTMoTtJqPcZ3MgBJAA5TjhJQsDG001ztKnHYZ2VBZrJsmpRLkiipPE2DcSA4K1SJVCGx1FS4DUjSn28tycNQAySh4UyLKspdc1i6j4Ps5yMp8hSh089KwoTXyeO7ALwRWIKSpC79IpPEtA3q9tov6%2Ft4o8pLVPU%2F0JVbbqsMayZ9MMvKzMsvT2o62yaPKlyhuDdyWPArydoarLZ3NCEoRhIqjprUKZuA3qy3WkSuqeoR8EGu7dtukq0g%2B4K0hetz3tkz7V0Bu9fpBiHvuQ4GqxI8GK3wBkmRZBR0R3QCfz2xSDrEahuVB4AUeZVkMHZfHCYh6q0NeNQtHoLRGQgPQiB%2BZlDtB0qFXZRztq584acS9CpswzLdL2FqLQmIaAcLAXbUo%2B67O7Pm9IATXMgBRSqAKFpS9DQBm0D0MQiF13aTqc2IAFkdZ4AAJBzFgdtaeph6GlYhv6qJxmqdXpxnmdZ9nJr9C2AJVvY%2BYj3b9YOuqFewiXcLOtqrqTycPd9yS%2BszjaytV5yNe12O9ZG%2FbPKN%2BgTbNsvLZT1Brbt3gABkjIAdTd2bs57r3fZ9qqK9xzzA6ZgMQ6ZsOx2uguea2%2BuGvj2q6MX2CTql87CIz9a5fXfOs%2F7nyo6iNXNftg%2BQ2XnVq9r6hzdn%2B9G5QZv7fbrud46veyMvkSj7cwesU%2Fa016MEZQsg17HWfoYEwECeAuGcO%2BT%2Bu9AG72vlGMewc2ZT05q9bmXZo4VUfkxYe%2FsRbh2Ie2DevZArILwbaRGr0HoKEoSGE%2BqAz6l1YQidBrxb6m3vpA2aVtbb2ydi7buT1v5iXoYrCKsihCoLwcA4WdMGbjxZtgjmicFH4N5kQ3%2BS9SEgNwbop%2Bflmo0NaouGWhivqMNkcw7hu5NpFyciXC%2BZiQLGNUfofhddnFUOfq%2FXg4jXZ0LMdIwJv55FeKxnY8uZ5K4B3UVg0OpivFzwIafAxmTJy8P0DovJ5imqSysUsAil1bHFOevLGpb1%2F6RPYSgThnj6mnjDCPG%2BxsBEPwSSuOa7IQk8HfpIyJvc4m50ejU%2BJ7SOl1jIXTMBcD%2BnIROjA8BvAABMiCkHVLmYoqGBy%2BQFIMKkieWjp7TWOXohe0SBmnKKTcxMz8pZjPaVE1ZntYnPLgvPNxHihHKNOf4wR9yeoiJbiMzu7z6mfOeXIvOCLDnw2RfMhKBtMEXPSU8tFfzskcNyWi7xSSunkJnl8mygz%2FLlIXLCg58LiUNJ%2BXi5prSgUKJUQbUFfSmUvIsXsYZoyIl4omb8qZLDKWzSUcirlB0sWaJxavcFs02VEr5SSzpizCnKqlUA6heEKkXXpeKhxxKnF6q4vi%2FR7jz4criSCnpATLVUshWI524T9kas6nU71zKkV%2BtmX6k5PjMXLPtZk6l3YNlwLfLsk1CKg3Bs1QskxCrJ7aN1cmthrjCH82zTw0NCcs0FoRAa80Ca%2BWMtLYi6ZNahBqttVwl1aCi1VydWCltUi3VtxhSK0t1aa0WvrXyGVBa5Wj3OYqnBuKR0NtzTk%2FNc7BZtp1LO5dfJy3zGsZWwNYqh0SpVVIxtgKj1MMdTXXpEbE09sdh63d3rB1zuHRulFMVX3otGhgqdGarliw%2FXyRt17ZWPJLQB%2FlpTU7bqNdvL14G3pmuXS%2B8D1qtqnq7Zyi9d9eXwcBAKqIQq%2B1wZQ%2Fu59h6MPKLHRuidAdw1nt0VGvYMbMzxv7a%2Bp97G4bvs44hgdXH6P%2FVI3uqjGqOOPv4xR6GvHE0SfE9JuZkNUWyqE8UxT3GFMqYY7Jj5mmmHacjbpoB%2BnHGGatcZ3epn3YiZ7vJqzRyfKWfbOZ92tmnPWadI5kKJM0YYzumJ4szmESabU46fzIXpSDvCww%2BWaRYA8CAA%3D%3D%3D\"\n                   target=\"_blank\">Link til Blockuino koden fra 5. Desember</a></p>\n\n            <div class=\"figure figure-sm\">\n                <iframe src=\"https://player.vimeo.com/video/147976523\" width=\"250\" height=\"187\" frameborder=\"0\"\n                        webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <h1>Luke 5</h1>\n\n            <p>I dag pakker vi ut et 3D printet mini-trafikklys. Traffikklyset kan vi montere på toppen av LED lampene\n                våre slik at vi kan simulere et ekte trafikklys!</p>\n\n            <p>\n                <a href=\"http://blockuino.no/?xml=DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD4AoKFGAAjCNQDGAaygYAntgCmqAIa0AJgFcAlnGoB9NQvERVCvQDdVW5aIUoYqAOwAGe7NQBaJrwGChAMy0FCDUoOGUwJRQANQBBACVeCAU1YHxA4LV%2BPwCgkLCIqLlFXh0MNIyQ7L9gOAUQDGqckTEpGXko1U0dfUNjUwsrG2SfHObK0PDI1DjEnmS1AHENCAq8rN8x3MyC6ZRiux4ytcymsdr6xs2toVEJaQOVdW1dAyMTWjNLWmtbUZvxutdlFZkkUotaNQ4HATlVrgDgBNgagDqU4OV0uszgi6g1sQDbq0Hh0nt1XggFBgNNh%2FgTzggMMoMApIujkSgKVSafi6YIWvd2opSS99JzBj9hod4bzmpYIBoFOzQTyZTU7m1HiguiLxb8RirVTUkVMQQkwalMadpYa%2Bfh1ZIDby0nKFY66cAXYqTahvnqvsp5VKbTd%2BRqSVrnj1dZLBoHacHzsbCj6hrZYwreEwmLCNgnznaiW6Cc6A67raqLnjy4bQ8ShRGyaLKdG%2FkWZR7S17kzEzW2K%2FbBZ1I69fZL43mtoigd6e3MFstVpa4ROQwX7n33fhPRvi572aO057xyvCQLNdqowfkumgyfJ0m9lf%2FXGeExnDmd5v7Z%2FV9vqzbKyuO9mgHc9hybDAW31f88w7QMlV7GCJ1rQdhUvVNoOA4sH1NOdwUhaEPyQ2C1ykH9Nz%2FLDZU7fcMOfDNyKdUDwwvEc6JvY8qO2fIZyfDieBYIiuOaUiHWIgCt07RicUuaTi2Y%2BtWP0bAdDAahDCg29hKNaduwAFQ6XgAHkAFU9IABTMoTtJqPcZ3MgBJAA5TjhJQsDG001ztKnHYZ2VBZrJsmpRLkiipPE2DcSA4K1SJVCGx1FS4DUjSn28tycNQAySh4UyLKspdc1i6j4Ps5yMp8hSh089KwoTXyeO7ALwRWIKSpC79IpPEtA3q9tov6%2Ft4o8pLVPU%2F0JVbbqsMayZ9MMvKzMsvT2o62yaPKlyhuDdyWPArydoarLZ3NCEoRhIqjprUKZuA3qy3WkSuqeoR8EGu7dtukq0g%2B4K0hetz3tkz7V0Bu9fpBiHvuQ4GqxI8GK3wBkmRZBR0R3QCfz2xSDrEahuVB4AUeZVkMHZfHCYh6q0NeNQtHoLRGQgPQiB%2BZlDtB0qFXZRztq584acS9CpswzLdL2FqLQmIaAcLAXbUo%2B67O7Pm9IATXMgBRSqAKFpS9DQBm0D0MQiF13aTqc2IAFkdZ4AAJBzFgdtaeph6GlYhv6qJxmqdXpxnmdZ9nJr9C2AJVvY%2BYj3b9YOuqFewiXcLOtqrqTycPd9yS%2BszjaytV5yNe12O9ZG%2FbPKN%2BgTbNsvLZT1Brbt3gABkjIAdTd2bs57r3fZ9qqK9xzzA6ZgMQ6ZsOx2uguea2%2BuGvj2q6MX2CTql87CIz9a5fXfOs%2F7nyo6iNXNftg%2BQ2XnVq9r6hzdn%2B9G5QZv7fbrud46veyMvkSj7cwesU%2Fa016MEZQsg17HWfoYEwECeAAFZnDvk%2FrvQBu9r5RjHsHNmU9OavW5l2aOFVH5MWHv7EW4cSHtg3r2QKKD8G2kRq9B6CgqEhhPqgM%2Bpc2EIgwa8W%2Bpt76QNmlbW2b9O7dyet%2FMSDDFYRVkUINB%2BDgHCzpgzceLMcEc0TgoghvNiG%2FyXmQkBeDdFPz8s1WhrVFwy0MV9JhsiWE8N3JtIuTkS4XzMSBYxqj9ACLrs46hz9X68Cdi7SRDDpGBN%2FPIrxWM7HlzPJXAO6jsGh1MV4uehDT4GMyZOPh%2BgdF5PMU1SWVilgEUurY4pz15Y1Lev%2FMxcF55uI8cImyKiDb%2BKEdEmsoiW48HfhE3RUSElfUaSMpRmTOkHRgeA9p%2F0TpzLgYg5B1T6k1CmTUmZo9UkTy0dPaaGz2GuKIfzY5vCfEGyKRckMNC8LSyxGMnODjjlOOeRDDhKAuGeNuYLK5B1ukPw%2Bb7fp4iP7rL%2BZ1OpUKGmxKhfE2FcUkkjxSUHfZ6SblIqEF8mOvT7oFIydiwEFiykPIXMM25oziVyLzjSnFpycnuPPgsxxhKgWsoUXNdkITBkSPocS6lNL3n0sRfS08YZUWYL2ZozFq98WzVxbk8V3iUXkLYqLLSKqdKktTvMfCF1KWwqFSqkV2rmnZM4cXFlCrfbsuNoI4F2rEzBLEaE52rsBXipNd63Oj1zVbMFYS5ZnK4lLLASspBRqEW92FXDGKorY0xsDRsn1VL422vbEmvJkN4apuzVyjNIKvwwqaUWstryv7luUQWoGKae6Vp7vW2GjbYbNpuq2m67biy1s3CTNGGM7ppqdNWrNna3opuHbaJRPrc0xVGWkWAPAgA\"\n                   target=\"_blank\">Link til Blockuino koden fra 4. Desember</a></p>\n\n            <div class=\"figure figure-sm\">\n                <iframe src=\"https://player.vimeo.com/video/147911388\" width=\"250\" height=\"187\" frameborder=\"0\"\n                        webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <h1>Luke 4</h1>\n\n            <p>I dag pakker vi opp en grønn LED lampe som vi kobler inn til Arduinoen slik at vi kan lage et\n                løpelys!</p>\n\n            <p>\n                <a href=\"http://blockuino.no/?xml=DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD4AoKFGAAjCNQDGAaygYAntgCmqAIa0AJgFcAlnGoB9NQvERVCvQDdVW5aIUoYqAOxN7s1EwBsvAYKEAzLQUINSg4ZTAlFAA1AEEAJV4IBTVgfACgtX5ff0Dg0PDIuUVeHQxU9OCs32A4BRAMKuyRMSkZeUjVTR19Q2NTCysbJO9spoqQsIjUWISeJLUAcQ0IctzMn1GcjPyplCK7HlLVjMbq%2FFEJSVPU2vqq1Iupe8fpfZV1bV09BAUMDWx7CBUCwXFA3CgABwQkbVBAYZQYBQROAYHaRH5%2FAGnQTNS5tRTvLpfDEDWjWWwwzbASwQDQKNHTeKUzZCF74jofbqk8nDbEs4DjBnRJlzZLHSobfnnFpXSVNfA0ul8nGK%2BmTSKWMlDMyq5lUtlvFCdT76TU8nXKWkHOX8wXq1Bm7UDK28JhMcXrFlnF7KoQKy1Km0424NIPVA3tQkm76%2FbnavX81VCmYJr241qG41cx0U31pu0FRmzeZLFZpNZ50YPGWVnH%2Bq21oRJ%2B0oHNJZ101P8iMEo2cr5ti0uxtjNZCwcdg5MAAMHpHfp9YflqsbNTqoa9%2Bpl7KjXOwOjA1EMcdzS9tY5bABV2rwAPIAVUvAAVH3Oz1Tm4WUE%2BAJIAOS7TdWW3TN%2B1NQZTyAoCBQvL8U1FFJyxOd8pUXKCq3rQN0KaEN5yaHsOSJfR9zgQ9j0HQCoJg7YrxvHgH2fV8kIlbDEwDNUv1%2FAC8O7EDIz7IiT15FD0OovIW3gktljfVi02lS4eOXdjFIXGsRLOXD1OrBSUJuddK20p4wz0u4bUM2V5ThBEkQUFFrk0rc8VAwSxGoLFjKsxFkVRFtXPc6CCN3L41C0egtHhCA9CIMlESE61RM%2FXYuMo%2FC%2BN7LMBwg4TZK2cS4JFeYZOw8zV0whRV0SyIuMvABNJ8AFEUvDNLCOjNBQrQPQxCIJrRxor8%2FxiABZRqeAACR%2FBYxqK0T5KM2aV10hzisCgToxCsKIqimKLS1SDZOpdihWSlT01efiMvAvbspy6oC12STklLGaDrmizXsWnLDqtY7%2F1qhreqrVbLr0dr6E67rAape7IkGkbeAAGVvAB1F7WJK9S60%2Bg7lq%2B4GwIMIJlFkKGqxh1BDBMEmeAAVmnWdmM9W7g30zHeKci6CY28LLW28LdvNUm00q1ATrZgKWqCq7BZU6DyeFYsxUZ2XULU5mqTKlWmhF78%2Frq0bxc3M6dzWrkwYh6geq189%2Bt2OHRqR1HlcNuS0PVpSGxdqtcfd5qOfSrnQp5yLov5uKhaonWxd9o38cEijrbl2CHoKp7pOdmPXbVzOPawnPqijvWAcT9mM05wTza6y2I%2FR%2BX7d4CaprR%2FOMfzs5sbbtdTLb1L%2FdarlKeJmvivlwfqbphnxhLjW3c7%2FAfZj1vM5MjdfaX5mV9Ot6eM3rTt90%2BfWeg%2Fe5M8my7LMk%2BNKP1SdNSWAeCAA\"\n                   target=\"_blank\">Link til Blockuino koden fra 3. Desember</a></p>\n\n            <div class=\"figure figure-sm\">\n                <iframe src=\"https://player.vimeo.com/video/147824118\" width=\"250\" height=\"187\" frameborder=\"0\"\n                        webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <h1>Luke 3</h1>\n\n            <p>I dag pakker vi opp en ny LED lampe. Denne gangen er lampen gul. Vi lærer å koble og programmere denne\n                slik at den blinker både i takt med og ulikt som den røde lampa vår.</p>\n\n            <p>\n                <a href=\"http://blockuino.no/?xml=DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD4AoKFGAAjCNQDGAaygYAntgCmqAIa0AJgFcAlnGoB9NQvERVCvQDdVW5aIUoYqAOxN7s1EwBsvAYKEAzLQUINSg4ZTAlFAA1AEEAJV4IBTVgfACgtX5ff0Dg0PDIuUVeHQxU9OCsoXxRCUkqkTEpGXlI1U0dfQQFDA1sexAnClcnFyrBYAQMZQwFCLgMfIjUbt7%2B8d9GupbFFXVtXT1ViysbJO9s7OBLCA0FJcjYhI3LoVrmorb9zpPaa1sLq9LsAKiEwstovFEslyrlMj4gdV3vUEcD8Dc7i9Nhj7uDIpY%2FmczDjAYith9WnsOocCf8kidbnYsa8QXCHqhaUSGXdeEwKLCMszNjUmiiyejlIyhcA4AoQBghRNkTsvtT9NgdGBqIZfnSmaiyaD2SgACqtXgAeQAqiaAAo2gWVA1A66Su7G20ASQAcqTEZtlZ8qQd9JyAYqXUa8agntCUmk4RGriK6knqjiI6lkdL8LL5Vis6KNqkpjM5goFsW8wrneTpEGUO0Q3oxNR1s6JqXZvNFtGUK32%2F63qKVcGfmotPQtNMIHoiH9ZrqiX6yTiPT6V%2F666PG98aadwx2t1GCjGoTwkvHQWmJimpGnUhmj1c132vd6TQBNW0AUU3ZMDSldzVPQ0EnNAW2oIh%2F2PNk%2B29GIAFk%2Fx4AAJT0AHFUMdeEh2TbNn2FJ88KEasb2HbYGybccgmUWQYMNODTxQQwTHongAFYAAYuJw8iJjIwiAJHKi930CcpxnOcF2JA9zn44FX2Y98GJIiiKV2YDmzDeShLU1kMmNWMLxhBNBT0odC1TCyXQlKUbJZJSIXfL9f1Ukjt1EkCwPoCCxGghTGMM%2BCkJQgAZC0AHU%2BIc2yCLU2ziIS4FBOSl1AM06jDlYuj3P0k8IRy9juN4synTSlk7zFCrb1SiqrPvWLUjqjyqofXM5RrSy2qPEtpm7CsurReLhTqhqUVSWAeCAA%3D%3D\"\n                   target=\"_blank\">Link til Blockuino koden fra 2. Desember</a></p>\n\n            <div class=\"figure figure-sm\">\n                <iframe src=\"https://player.vimeo.com/video/147695596\" width=\"250\" height=\"187\" frameborder=\"0\"\n                        webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <h1>Luke 2</h1>\n\n            <p>I dag pakker vi opp et koblingsbrett og en rød LED lampe. Vi lærer oss å bruke koblingsbrettet, før vi\n                kobler på det røde lyset og får det til å blinke i takt med L-lampen på Arduinoen.</p>\n\n            <p>\n                <a href=\"http://blockuino.no/?xml=DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD4AoKFGAAjCNQDGAaygYAntgCmqAIa0AJgFcAlnGoB9NQvERVCvQDdVW5aIUoYqAOxN7s1EwBsvAYKEAzLQUINSg4ZTAlFAA1AEEAJV4IBTVgfACgtX5ff0Dg0PDIuUVeHQxU9OCsoXxRCUkqkTEpGXlI1U0dfQQFDA1sexAnClcnFyrBYAQMZQwFCLgMfIjUbt7%2B8d9GupbFFXVtXT1ViysbJO9s7OBLCA0FJcjYhI3LoVrmorb9zpPaa1sLq9LsAKiEwstovFEslyrlMj4gdV3vUEcD8Dc7i9Nhj7uDIpY%2FmczDjAYith9WnsOocCf8kidbnYsa8QXCHqhaUSGXdeEwKLCMszNjUmiiyejlIyhcA4AoQBghRNkTsvtT9NgdGBqIZfnSmaiyaD2SgACqtXgAeQAqiaAAo2gWVA1A66Su7G20ASQAcqTEZtlZ8qQd9JyAYqXUa8agntCUmk4RGriK6knqjiI6lkdL8LL5Vis6KNqkpjM5goFsW8wrneTpEGUO0Q3oxNR1s6JqXZvNFtGUK32%2F63qKVcGfmotPQtNMIHoiH9ZrqiX6yTiPT6V%2F666PG98aadwx2t1GCjGoTwkvHQWmJimpGnUhmj1c132vd6TQBNW0AUU3ZMDSldzVPQ0EnNAW2oIh%2F2PNk%2B29GIAFk%2Fx4AAJT0AHFUMdeEh2TbNn2FJ88KEasb2HbYGybccgmUWQYMNODTxQQwTHongAFYAAYuJw8iJjIwiAJHKi930CcpxnOcF2JA9zn44FX2Y98GJIiiKV2YDmzDeShLU1kMmNWMLxhBNBT0odC1TCyXQlKUbJZJSIXfL9f1Ukjt1EkCwPoCCxGghTGMM%2BCkJQgAZC0AHU%2BIc2yCLU2ziIS4FBOSl1AM06jDlYuj3P0k8IRy9juN4synTSlk7zFCrb1SiqrPvWLUjqjyqofXM5RrSy2qPEtpm7CsurReLhTqhqUVSWAeCAA%3D%3D\"\n                   target=\"_blank\">Link til Blockuino koden fra 1. Desember</a></p>\n\n            <div class=\"figure figure-sm\">\n                <iframe src=\"https://player.vimeo.com/video/147569183\" width=\"250\" height=\"187\" frameborder=\"0\"\n                        webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <h1>Luke 1</h1>\n\n            <p>I dag pakker vi opp en Arduino og en USB kabel. Vi lærer oss å koble Arduinoen til datamaskinen vår, samt\n                å bruke Blockuino for å lage kildekoden til Arduinoen ved hjelp av klosser. TIl slutt lærer vi hvordan\n                vi laster programmet vårt opp til Arduinoen.</p>\n\n            <div class=\"figure figure-sm\">\n                <iframe src=\"https://player.vimeo.com/video/147439674\" width=\"250\" height=\"187\" frameborder=\"0\"\n                        webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>");
  
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
  stack1 = helpers['if'].call(depth0, "content.hasSpotsRemaining", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(16, program16, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        </td>\n                    </tr>\n                </table>\n            ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <tr>\n                            <td>\n                                ");
  stack1 = helpers['if'].call(depth0, "participant.givenName", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                                ");
  stack1 = helpers['if'].call(depth0, "participant.email", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
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
  
  var buffer = '', stack1;
  data.buffer.push("\n                                    <br />");
  stack1 = helpers._triageMustache.call(depth0, "participant.email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary form-control")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event.paamelding", "content.id", options) : helperMissing.call(depth0, "link-to", "event.paamelding", "content.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                    Meld deg på! (");
  stack1 = helpers._triageMustache.call(depth0, "content.remainingSpots", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" plasser igjen)\n                                ");
  return buffer;
  }

function program16(depth0,data) {
  
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
  stack1 = helpers['if'].call(depth0, "content.hasSpotsRemaining", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(16, program16, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        </td>\n                    </tr>\n                </table>\n            ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <tr>\n                            <td>\n                                ");
  stack1 = helpers['if'].call(depth0, "participant.givenName", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                                ");
  stack1 = helpers['if'].call(depth0, "participant.email", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
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
  
  var buffer = '', stack1;
  data.buffer.push("\n                                       <br />");
  stack1 = helpers._triageMustache.call(depth0, "participant.email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary form-control")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event.paamelding", "content.id", options) : helperMissing.call(depth0, "link-to", "event.paamelding", "content.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                    Meld deg på! (");
  stack1 = helpers._triageMustache.call(depth0, "content.remainingSpots", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" plasser igjen)\n                                ");
  return buffer;
  }

function program16(depth0,data) {
  
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
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item mypage-list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Min Side", "mypage.index", options) : helperMissing.call(depth0, "link-to", "Min Side", "mypage.index", options))));
  data.buffer.push("\n\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item mypage-list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Ordrebekreftelser", "mypage.orders", options) : helperMissing.call(depth0, "link-to", "Ordrebekreftelser", "mypage.orders", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"pageContent\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"list-group mypage-list-group\">\n                ");
  stack1 = helpers['if'].call(depth0, "session.session.authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
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
  stack1 = helpers['if'].call(depth0, "order.createdDate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
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
function program2(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers.dateTime || (depth0 && depth0.dateTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "order.createdDate", options) : helperMissing.call(depth0, "dateTime", "order.createdDate", options))));
  }

  data.buffer.push("<h2>Ordrebekreftelser</h2>\n\n<table class=\"table tabl-striped\">\n    <tr>\n        <th>Ordrenummer</th>\n        <th>Status</th>\n        <th>Dato</th>\n        <th>Ordrelinjer</th>\n        <th></th>\n    </tr>\n    <tbody>\n        ");
  stack1 = helpers.each.call(depth0, "order", "in", "controller.session.session.user.sortedOrders", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </tbody>\n</table>");
  return buffer;
  
});

Ember.TEMPLATES["mypage/orders/order"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        Vi har registrert bestillingen den ");
  data.buffer.push(escapeExpression((helper = helpers.dateTime || (depth0 && depth0.dateTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "createdDate", options) : helperMissing.call(depth0, "dateTime", "createdDate", options))));
  data.buffer.push(".\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        Bestillingen er sendt den ");
  data.buffer.push(escapeExpression((helper = helpers.dateTime || (depth0 && depth0.dateTime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "shipmentDate", options) : helperMissing.call(depth0, "dateTime", "shipmentDate", options))));
  data.buffer.push(".\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n        Bestillingen er under behandling og vil bli sendt så fort som mulig!\n    ");
  }

function program7(depth0,data) {
  
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
  stack1 = helpers['if'].call(depth0, "orderLine.discountAmount", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </td>\n            </tr>\n        ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.currencyFormat || (depth0 && depth0.currencyFormat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "orderLine.discountAmount", options) : helperMissing.call(depth0, "currencyFormat", "orderLine.discountAmount", options))));
  data.buffer.push("\n                    ");
  return buffer;
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n                        0,-\n                    ");
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <tr>\n                <td>Klimanøytral Servicepakke</td>\n                <td></td>\n                <td>Kr. ");
  stack1 = helpers._triageMustache.call(depth0, "shippingCost", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td></td>\n            </tr>\n        ");
  return buffer;
  }

function program14(depth0,data) {
  
  
  data.buffer.push("\n            <tr>\n                <td>Hentes på Kodegenet på Munkerud Gård</td>\n                <td></td>\n                <td>Kr. 0,-</td>\n                <td></td>\n            </tr>\n        ");
  }

function program16(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <h1>Leveringsdetaljer</h1>\n\n\n    <table class=\"table\">\n        <tbody>\n        <tr>\n            <td>Navn:</td>\n            <td>");
  stack1 = helpers._triageMustache.call(depth0, "givenName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "surname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n        </tr>\n        <tr>\n            <td>Leveringsaddresse:</td>\n            <td>\n                ");
  stack1 = helpers._triageMustache.call(depth0, "address", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <br />\n                ");
  stack1 = helpers._triageMustache.call(depth0, "postalCode", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </td>\n        </tr>\n        <tr>\n            <td>Telefonnummer:</td>\n            <td>");
  stack1 = helpers._triageMustache.call(depth0, "phone", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n        </tr>\n        </tbody>\n    </table>\n");
  return buffer;
  }

  data.buffer.push("<h1>Ordrebekreftelse for ");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n<p>Takk for din bestilling!\n    ");
  stack1 = helpers['if'].call(depth0, "createdDate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "shipmentDate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</p>\n\n<table class=\"table\">\n    <thead>\n    <tr>\n        <th>Produkt</th>\n        <th>Antall</th>\n        <th>Pris</th>\n        <th>Rabatt</th>\n    </tr>\n    </thead>\n    <tbody>\n        ");
  stack1 = helpers.each.call(depth0, "orderLine", "in", "orderLines", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "shippingType", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <tr>\n        <td colspan=\"3\" class=\"rightAlign\">Subtotal:</td>\n        <td>Kr. ");
  data.buffer.push(escapeExpression((helper = helpers.currencyFormat || (depth0 && depth0.currencyFormat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "subtotal", options) : helperMissing.call(depth0, "currencyFormat", "subtotal", options))));
  data.buffer.push("</td>\n    </tr>\n\n    <tr>\n        <td colspan=\"3\" class=\"rightAlign\">Hvorav MVA (25%):</td>\n        <td>Kr. ");
  data.buffer.push(escapeExpression((helper = helpers.currencyFormat || (depth0 && depth0.currencyFormat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "taxAmount", options) : helperMissing.call(depth0, "currencyFormat", "taxAmount", options))));
  data.buffer.push("</td>\n    </tr>\n    </tbody>\n</table>\n\n");
  stack1 = helpers['if'].call(depth0, "shippingType", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
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

Ember.TEMPLATES["shop/category"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("category.thumbnail.href")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <div class=\"col-sm-2 col-md-2 shop-index-category-products\">\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("shop-index-category-product pointer"),
    'tagName': ("div")
  },hashTypes:{'class': "STRING",'tagName': "STRING"},hashContexts:{'class': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "shop.product", "product", options) : helperMissing.call(depth0, "link-to", "shop.product", "product", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <img class=\"shop-index-category-product-thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("product.thumbnail.href")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                    <div class=\"shop-index-category-product-name\">");
  stack1 = helpers._triageMustache.call(depth0, "product.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br />Kr. ");
  stack1 = helpers._triageMustache.call(depth0, "product.price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(",-</div>\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"pageContent\">\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "category.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n    <div class=\"row mediumBottomPadding\">\n        <div class=\"col-sm-12 col-md-12\">\n            <div>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "category.subtitle", options) : helperMissing.call(depth0, "markdown", "category.subtitle", options))));
  data.buffer.push("\n\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("div"),
    'classNames': ("pointer figure figure-md")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "shop.category", "category.id", options) : helperMissing.call(depth0, "link-to", "shop.category", "category.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "category.content", options) : helperMissing.call(depth0, "markdown", "category.content", options))));
  data.buffer.push("\n            </div>\n\n            <h1>Prodkter</h1>\n        </div>\n\n        ");
  stack1 = helpers.each.call(depth0, "product", "in", "category.products", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["shop/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div class=\"row shop-index-category\">\n            <div class=\"pageContent\">\n                <div class=\"col-sm-12 col-md-7 col-md-offset-2 shop-index-category-thumb\">\n                    <div class=\"shop-index-category-text\">\n                        <div class=\"shop-index-category-title\">");
  stack1 = helpers._triageMustache.call(depth0, "category.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                        <div class=\"shop-index-category-subtitle\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "category.subtitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                    </div>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "shop.category", "category.id", options) : helperMissing.call(depth0, "link-to", "shop.category", "category.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n\n                <div class=\"col-sm-12 col-md-2 shop-index-category-products\">\n                    ");
  stack1 = helpers.each.call(depth0, "product", "in", "category.sortedProductsLimited", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    <div class=\"shop-index-category-button\">\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "shop.category", "category.id", options) : helperMissing.call(depth0, "link-to", "shop.category", "category.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n        </div>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <img class=\"shop-index-category-thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("category.thumbnail.href")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("shop-index-category-product pointer"),
    'tagName': ("div")
  },hashTypes:{'class': "STRING",'tagName': "STRING"},hashContexts:{'class': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "shop.product", "product", options) : helperMissing.call(depth0, "link-to", "shop.product", "product", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <img class=\"shop-index-category-product-thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("product.thumbnail.href")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                            <div class=\"shop-index-category-product-name\">");
  stack1 = helpers._triageMustache.call(depth0, "product.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br />Kr. ");
  stack1 = helpers._triageMustache.call(depth0, "product.price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(",-</div>\n                        ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n                            <div class=\"btn btn-primary pointer\">Flere Produkter <span class=\"glyphicon glyphicon-chevron-right\"></span></div>\n                        ");
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
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <div class=\"col-sm-3 col-md-3\">\n                                <img class=\"product-image-thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("picture.href")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectPhoto", "picture", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("/>\n                            </div>\n                        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addToCart", "model", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("><i class=\"glyphicon glyphicon-shopping-cart\"></i> Legg i Handlekurven</button>\n                    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        ");
  stack1 = helpers['if'].call(depth0, "maksAntallBestillt", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("\n                            <button class=\"btn btn-primary disabled\" disabled><i class=\"glyphicon glyphicon-shopping-cart\"></i> Vi har ikke flere tilgjengelig</button>\n                        ");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\n                            <button class=\"btn btn-primary disabled\" disabled><i class=\"glyphicon glyphicon-shopping-cart\"></i> Midlertidig utsolgt</button>\n                        ");
  }

function program10(depth0,data) {
  
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
  data.buffer.push("\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <h2>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n                <div class=\"product-price\">Pris: NOK ");
  stack1 = helpers._triageMustache.call(depth0, "price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(",-</div>\n\n                <div class=\"product-buttons\">\n                    ");
  stack1 = helpers['if'].call(depth0, "kanLeggeIHandlekurv", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                </div>\n\n                <hr>\n\n                Antall på lager i Oslo: ");
  stack1 = helpers._triageMustache.call(depth0, "quantity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                <div class=\"btn btn-default btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "scrollToDescription", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-arrow-circle-o-down pull\"></i> Beskrivelse </div>\n                <div class=\"btn btn-default btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "scrollToLearn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-arrow-circle-o-down\"></i> Lær å bruke</div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <a id=\"productDescription\"></a>\n                <div class=\"product-description\">\n                    <h1>Beskrivelse</h1>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.content", options) : helperMissing.call(depth0, "markdown", "model.content", options))));
  data.buffer.push("\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <a id=\"productLearn\"></a>\n                <div class=\"product-learn\">\n                    <h1>Lær å bruke</h1>\n                    ");
  stack1 = helpers.each.call(depth0, "learn", "in", "model.learn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
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