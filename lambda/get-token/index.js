var braintree = require('braintree');

exports.handler = (event, context, callback) => {
  var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   'pckdvctcnycng8q7',
    publicKey:    'pknbjbjysx45mnc4',
    privateKey:   'e7c8ddaea6f4a84b2771a88c40d0ffae'
  });

  gateway.clientToken.generate({}, function (err, response) {
		callback(null, response);
	});
};
