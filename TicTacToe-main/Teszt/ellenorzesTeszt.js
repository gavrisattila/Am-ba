QUnit.module('row', function () {

    QUnit.test('A row függvény létezik e?', function (assert) {

        assert.ok(row, "Létezik a row függvény.");

    });
    QUnit.test('Függvény-e a row?', function(assert) {
        assert.ok(typeof column==="function");
    });
    QUnit.test('row', function (assert) {
        tomb=["-","-","-","X","X","X","O","O","-"]
        assert.equal(row(),true);
    });
    QUnit.test('row', function (assert) {
        tomb=["O","O","O","X","-","X","-","-","-"]
        assert.equal(row(),true);
    });
    QUnit.test('row', function (assert) {
        tomb=["X","-","X","O","O","O","-","-","-"]
        assert.equal(row(),true);
    });
    QUnit.test('row', function (assert) {
        tomb=["-","-","O","O","-","O","X","X","X"]
        assert.equal(row(),true);
    });
    QUnit.test('row', function (assert) {
        tomb=["-","-","-","X","-","X","O","O","O"]
        assert.equal(row(),true);
    });
    QUnit.test('row', function (assert) {
        tomb=["X","X","X","O","-","O","-","-","-"]
        assert.equal(row(),true);
    });


});



QUnit.module('column', function () {

    QUnit.test('A column függvény létezik e?', function (assert) {

        assert.ok(column, "Létezik a column függvény.");

    });
    QUnit.test('Függvény-e a row?', function(assert) {
        assert.ok(typeof column==="function");
    });
    QUnit.test('column', function (assert) {
        tomb=["-","-","-","X","X","X","O","O","-"]
        assert.equal(column(),true);
    });
    QUnit.test('column', function (assert) {
        tomb=["O","O","O","X","-","X","-","-","-"]
        assert.equal(column(),true);
    });
    QUnit.test('column', function (assert) {
        tomb=["X","-","X","O","O","O","-","-","-"]
        assert.equal(column(),true);
    });
    QUnit.test('column', function (assert) {
        tomb=["-","-","O","O","-","O","X","X","X"]
        assert.equal(column(),true);
    });
    QUnit.test('column', function (assert) {
        tomb=["-","-","-","X","-","X","O","O","O"]
        assert.equal(column(),true);
    });
    QUnit.test('column', function (assert) {
        tomb=["X","X","X","O","-","O","-","-","-"]
        assert.equal(column(),true);
    });

});



QUnit.module('balrolJobra', function () {

    QUnit.test('A balrolJobra függvény létezik e?', function (assert) {

        assert.ok(balrolJobra, "Létezik a balrolJobra függvény.");

    });
    QUnit.test('Függvény-e a balrolJobra?', function(assert) {
        assert.ok(typeof balrolJobra==="function");
    });
    QUnit.test('balrolJobra', function (assert) {
        tomb=["O","-","-","-","O","X","-","X","O"]
        assert.equal(balrolJobra(),true);
    });
    QUnit.test('balrolJobra', function (assert) {
        tomb=["X","-","-","-","X","O","-","O","X"]
        assert.equal(balrolJobra(),true);
    });
    
 

});



QUnit.module('jobbrolBalra', function () {

    QUnit.test('A jobbrolBalra függvény létezik e?', function (assert) {

        assert.ok(jobbrolBalra, "Létezik a jobbrolBalra függvény.");

    });
    QUnit.test('Függvény-e a jobbrolBalra?', function(assert) {
        assert.ok(typeof jobbrolBalra==="function");
    });
    QUnit.test('jobbrolBalra', function (assert) {
        tomb=["-","-","X","O","X","O","X","O","-"]
        assert.equal(jobbrolBalra(),true);
    });
    QUnit.test('jobbrolBalra', function (assert) {
        tomb=["-","-","O","X","O","X","O","X","-"]
        assert.equal(jobbrolBalra(),true);
    });


});



QUnit.module('cross', function () {

    QUnit.test('A cross függvény létezik e?', function (assert) {

        assert.ok(cross, "Létezik a cross függvény.");

    });
    QUnit.test('Függvény-e a cross?', function(assert) {
        assert.ok(typeof cross==="function");
    });
    

});



QUnit.module('ellenorzes', function () {

    QUnit.test('Az ellenorzes függvény létezik e?', function (assert) {

        assert.ok(ellenorzes, "Létezik az ellenorzes függvény.");


    });
    QUnit.test('Függvény-e a ellenorzes?', function(assert) {
        assert.ok(typeof ellenorzes==="function");
    });

});