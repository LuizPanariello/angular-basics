var mock = [{
	name: 'nome',
	quantity: 1,
	price: 300000
}];

describe('a filter', function(){
	beforeEach(module('app'));

	describe('searcher', function(){
		it('should return an array with a class object', inject( function(searcherFilter){
			expect(searcherFilter(mock, '').toEqual(mock[0].class == 'item-show'));
		});
	});
});