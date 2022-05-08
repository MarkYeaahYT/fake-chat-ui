$(document).ready(function() {
    /**
     * ====================================================================================================
     * Property
     * ====================================================================================================
     */
    let IS_LOADING = true;
    /**
     * ====================================================================================================
     * end property
     * ====================================================================================================
     */

    /**
     * ====================================================================================================
     * Function
     * ====================================================================================================
     */
    const send_message = () => {
        
        const audio = new Audio("assets/iphone_send.wav");
        audio.play();
        
        pesan = $('input#input_sendit').val()

        // Once response has loaded, do this
        $('.messages .message:last .question').text(`${pesan}`).removeClass('loading');

        page_bottom = $(document).height();

        $('html, body').animate({
            scrollTop: page_bottom
        }, 500);

        IS_LOADING = true;
    }

    const show_loading = () => {
        let html = `<div class="message active">
                        <p class="question"></p>
                    </div>`;

        $('div.messages').append(html);

        $('.messages .message:last .question').text('...').addClass('loading');
        IS_LOADING = false;
        window.scrollTo(0, document.body.scrollHeight);
    }
    /**
     * ====================================================================================================
     * end Function
     * ====================================================================================================
     */

    /**
     * ====================================================================================================
     * Callback
     * ====================================================================================================
     */
    $('button#sendit').click(function(){

        send_message()
    });

    $('input#input_sendit').on('keypress',function(e) {
        if(e.which == 13) {
            send_message()
        }
    });
    $('input#input_sendit').on('keyup',function(e) {

        if(IS_LOADING){
            
            if(e.which == 13) {
            
            }else{
            
                show_loading()
            }
            
        }else{

        }
    });
    /**
     * ====================================================================================================
     * end Callback
     * ====================================================================================================
     */
});
