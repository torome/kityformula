/**
 * "⊉"操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'NotSupseteqOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M11.257,5.088c1.704,0.984,3.408,3.072,3.408,5.88c0,3.888-3.312,6.937-7.344,6.937H5.929l-1.536,3.696h8.953   c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H3.984L2.568,25.97c-0.144,0.336-0.24,0.576-0.552,0.576   c-0.288,0-0.48-0.216-0.48-0.48c0-0.24,1.2-3,1.416-3.504H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h2.497l1.56-3.696   H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h4.44L10.033,5.52c-1.2-0.504-2.232-0.552-2.808-0.552H0.84   c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h6.457c1.056,0,2.136,0.192,3.121,0.648l1.872-4.513   C12.385,0.048,12.505,0,12.649,0c0.288,0,0.48,0.216,0.48,0.48c0,0.12-0.024,0.168-0.144,0.456L11.257,5.088z M6.336,16.945   c1.68,0,3.48,0,5.281-1.56c1.32-1.128,2.088-2.665,2.088-4.44c0-1.632-0.72-3.625-2.832-4.969L6.336,16.945z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "NotSupseteq" );

            opShape.translate( 6, 0 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );