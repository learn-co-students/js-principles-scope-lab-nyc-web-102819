var customerName = 'bob'
const leastFavoriteCustomer = 'Rob'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer(name) {
  bestCustomer = name  
}

function changeLeastFavoriteCustomer(name) {
  leastFavoriteCustomer = name  
}