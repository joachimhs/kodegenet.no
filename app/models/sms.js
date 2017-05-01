Kodegenet.Sms = DS.Model.extend({
    name: DS.attr('string'),
    message: DS.attr('string'),
    recipients: DS.attr('string'),
    smsResult: DS.attr('string')
});