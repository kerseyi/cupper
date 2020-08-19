+++
title = "Datepicker"
toc = true
tags = ["datepicker, skip link"]
+++

Accessible datepicker, ported from [Inclusive Dates](https://github.com/fymmot/inclusive-dates).

## Applicable WCAG 2.1 Success Criteria

{{< wcag include="1.3.1, 4.1.2, 2.1.1, 4.1.1" descriptions="true" >}}

## Demo

{{<demo caption="Accessible datepicker.">}}
	<script>
		$(document).ready(function() {
                //Initiate calendar!
                $('#inclusive-datepicker_input').a11ydate({
                    demo: true,
                    popup: true
                });
            });
	</script>
	<style>
		
	</style>
	
    
        <div class="grid-container mt">
           <div class="align-center grid-margin-x grid-x text-center">
            <div class="cell small-12 medium-10 large-8">
        <main> 
        <section class="align-center">

            <div class="inclusive-datepicker_input__wrapper" id="input_wrapper">
                <div class="form-field" style="margin:0 auto">
                    <label class="form-field__label date" for="inclusive-datepicker_input">Write a date
                    </label>
                    <input autocomplete="off" id="inclusive-datepicker_input" class="date form-field__input-date inclusive-datepicker_input__date" type="date" value="" min="" max="" placeholder='e.g. 2019-09-01'>
                    <p id="date-error" aria-live="assertive" class="hidden inclusive-datepicker_input__date-error"></p>
                </div>
                
            </div>
            
            <div class="" id="datepicker_wrapper">
                <!-- Datepicker will go here -->
            </div>
            
        </section>
        
    </main>
</div>
    </div>

{{</demo>}}