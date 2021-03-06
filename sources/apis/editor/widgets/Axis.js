define( [

    'apis/editor/widgets/Options'

], function ( OptionsWidget ) {

    return OptionsWidget.extend( {

        el : [ '<div class="widget axis-widget">'
        ,'          <div class="widget-wrapper">'
        ,'              <ul class="options"></ul>'
        ,'          </div>'
        ,'      </div>'
        ].join( '' ),

        initialize : function ( options ) {

            options = _.defaults( options || { }, {

                options : { x : 'X'
                          , y : 'Y'
                          , z : 'Z' }

            } );

            OptionsWidget.prototype.initialize.call( this, options );

        }

    } );

} );