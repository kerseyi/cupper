``` HTML
<!--NOTE: Example using Bootstrap 4.4.1 -->
<!-- Button trigger modal -->
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>
<div class="container-fluid">
  <div class="row main-content">
    <div class="col-md-6 offset-md-3">
      <button id="launchModal" type="button" class="btn btn-light btn-lg btn-block">
        Launch Modal
      </button>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Accessible Modal Example</h5>
        <button type="button" class="close closeModal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p tabindex="0">Set a tabindex on this P element to make sure first element in modal gets focus. Normally non-focusable elements that are the first element in a modal need to recieve focus.</p>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email" title="Please enter your email." required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" title="Please enter your city." required>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>OR</option>
                <option>CA</option>
                <option>NY</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" title="Please enter your zip code." required>
            </div>
          </div>
          <div>
          </div>
          <p>Make sure that error messages have been added to all inputs.</p>
      </div>
      <div class="modal-footer">
        <input role="button" type="submit" class="btn btn-primary closeModal" value="Submit">
        </form>
      </div>
    </div>
  </div>
</div>
<div class="modal-overlay"></div>
```