var payload = JSON.parse(context.getVariable('response.content'));
context.setVariable('bookId', payload.id);
context.setVariable('bookPrice', parseFloat(payload.price.replace(/[^\d.]/g, '')));
