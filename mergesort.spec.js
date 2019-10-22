
describe('Merge Sort', function(){

  // beforeAll(function(){
  //   spyOn(window, 'swap' ).and.callThrough();
  // });
  // it('should be called with minimum number of times necessary', function () {
  //   window.bubbleSort([4,2,0]);
  //   expect(window.swap.calls.count()).toEqual(3);
  // });
    it('handles an empty array', function(){
      expect( mergeSort([]) ).toEqual( [] );
    });
    it('handles single item array', function(){
      expect( mergeSort([3]) ) .toEqual ( [3] );
    });
    it('handles multiple items array', function(){
      expect ( mergeSort([5,7,2,0,-4]) ). toEqual([-4,0,2,5,7])
    });

  })
