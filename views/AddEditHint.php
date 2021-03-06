<div class="col-sm-3">                    
    <h2>Add/Edit Hint</h2>
        <form class="form-horizontal col-sm-12">
            <div class="form-group">
                <label for="inputID" class="control-label">ID</label>
                <input ng-model="hintCtrlFormData.id" type="text" class="form-control" id="inputID" disabled="disabled" maxlength="10">
            </div>
            <div class="form-group">
                <label for="inputName" class="control-label">Name</label>
                <input ng-model="hintCtrlFormData.name" type="text" class="form-control" id="inputName" placeholder="Enter name" maxlength="255">
            </div>
            <div class="form-group">
                <label for="inputClue" class="control-label">Clue ID</label>
                <select class="form-control" id="inputClue" ng-model="hintCtrlFormData.clue">
                    <option ng-repeat="clue in clues" value="{{clue.id}}">{{clue.id}} | {{clue.name}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="inputValue" class="control-label">Value</label>
                <textarea ng-model="hintCtrlFormData.value" type="text" class="form-control" id="inputValue" placeholder="Enter value" maxlength="255"></textarea>
            </div>
            <div class="form-group">
                <div class="">
                    <button ng-click="hintCtrlFormData.submit()" class="btn btn-primary" type="submit">
                        <span class="glyphicon glyphicon-floppy-save" aria-hidden="true"></span>
                        Save
                    </button>
                    <button ng-click="hintCtrlFormData.reset()" class="btn btn-default" type="submit">
                        <span class="glyphicon glyphicon-floppy-remove" aria-hidden="true"></span>
                        Reset
                    </button>

                    <!-- <pre>{{hintCtrlFormData}}</pre> -->
                </div>
            </div>
        </form>
</div>
<div class="col-sm-9">
    <h2>List Hints</h2>
    <br />
    <table ng-show="loaded" class='table table-bordered table-striped lists'>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Value</th>
        <th>Clue</th>
        <th>Controls</th>
    </tr>
    <tr ng-repeat='item in hintList'>
        <td> {{ item.id }} </td>
        <td> {{ item.name }} </td>
        <td> {{ item.value }} </td>
        <td> {{ item.clue }} </td>
        <td class="controls">
            <button class="btn btn-success" ng-click='editItem(item)' title="Edit">
                <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
            </button>
            <button class="btn btn-danger" ng-click='deleteItem(item)' title="Delete">
                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>
        </td>
    </tr>
    </table>

    <div class="loading-list" ng-hide="loaded"><i class="glyphicon glyphicon-refresh"></i></div>
</div>