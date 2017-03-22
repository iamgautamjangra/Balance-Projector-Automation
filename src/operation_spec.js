describe('Projector Basic Operations', function() {
	
	beforeEach(function() {
		browser.get('http://localhost:8080/projector/index.html');
	});
	
	it('Verify Income Disable', function() {
		element(by.model('income.active')).click();
		expect(element(by.repeater('income in incomes')).getAttribute('class')).toBe('active-false');
	});
	
	it('Verify Expense Disable', function() {
		element(by.model('expense.active')).click();
		expect(element(by.repeater('expense in expenses')).getAttribute('class')).toBe('active-false');
	});

	it('Verify Non-Recurring Transactions Disable', function() {
		element(by.model('transaction.active')).click();
		expect(element(by.repeater('transaction in nonRecurring')).getAttribute('class')).toBe('active-false');
	});

	it('Verify Add new Income', function() {
		var incomeCount = element.all(by.repeater('income in incomes')).count();
		element(by.xpath('//button[@ng-click="addIncome();"]')).click();
		expect(element.all(by.repeater('income in incomes')).count()).toBeGreaterThan(incomeCount);
	});
	
	it('Verify Add new Expenses', function() {
		var expenseCount = element.all(by.repeater('expense in expenses')).count();
		element(by.xpath('//button[@ng-click="addExpense();"]')).click();
		expect(element.all(by.repeater('expense in expenses')).count()).toBeGreaterThan(expenseCount);
	});
	
	it('Verify Add new Transactions', function() {
		var transCount = element.all(by.repeater('transaction in nonRecurring')).count();
		element(by.xpath('//button[@ng-click="addTransaction();"]')).click();
		expect(element.all(by.repeater('transaction in nonRecurring')).count()).toBeGreaterThan(transCount);
	});

	it('Verify Remove Income', function() {
		var incomeCount = element.all(by.repeater('income in incomes')).count();
		element(by.xpath('//button[@ng-click="addIncome();"]')).click();
		expect(element.all(by.repeater('income in incomes')).count()).toBeGreaterThan(incomeCount);
		element(by.xpath('//a[@ng-click="removeIncome($index);"]')).click();
		expect(element.all(by.repeater('income in incomes')).count()).toBe(incomeCount);
	});
	
	it('Verify Remove Expenses', function() {
		var expenseCount = element.all(by.repeater('expense in expenses')).count();
		element(by.xpath('//button[@ng-click="addExpense();"]')).click();
		expect(element.all(by.repeater('expense in expenses')).count()).toBeGreaterThan(expenseCount);
		element(by.xpath('//a[@ng-click="removeExpense($index);"]')).click();
		expect(element.all(by.repeater('expense in expenses')).count()).toBe(expenseCount);
	});
	
	it('Verify Remove Transactions', function() {
		var transCount = element.all(by.repeater('transaction in nonRecurring')).count();
		element(by.xpath('//button[@ng-click="addTransaction();"]')).click();
		expect(element.all(by.repeater('transaction in nonRecurring')).count()).toBeGreaterThan(transCount);
		element(by.xpath('//a[@ng-click="removeTransaction($index);"]')).click();
		expect(element.all(by.repeater('transaction in nonRecurring')).count()).toBe(transCount);
	});
	
});