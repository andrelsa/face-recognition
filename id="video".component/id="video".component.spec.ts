import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { IdVideoComponent } from "./id="video".component";

describe("IdVideoComponent", () => {
    let comp: IdVideoComponent;
    let fixture: ComponentFixture<IdVideoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ IdVideoComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(IdVideoComponent);
        comp = fixture.componentInstance;
    });

    it("can load instance", () => {
        expect(comp).toBeTruthy();
    });

});