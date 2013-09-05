/**
 * Created with JetBrains WebStorm.
 * User: pierangelocecchetto
 * Date: 5/09/13
 * Time: 4:13 PM
 * To change this template use File | Settings | File Templates.
 */

function HeaderController($scope) {

}

function CartController($scope)
{
    $scope.bill = {discount:0};

    $scope.items = [
        {title:'Paint Pots', quantity: 8, price: 3.95},
        {title:'Polka Dots', quantity: 17, price: 12.95},
        {title:'Pebbles', quantity: 5, price: 6.95}
    ];

    $scope.totalCart = function() {
        console.log('called totalCart()')
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++)
        {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }

        return total;
    }

    $scope.subtotal = function() {
        return $scope.totalCart() - $scope.bill.discount;
    };

    function calculateDiscount(newValue, oldValue, scope) {
        $scope.bill.discount = newValue > 100 ? 10 : 0;
    }

    $scope.$watch($scope.totalCart, calculateDiscount);
}
