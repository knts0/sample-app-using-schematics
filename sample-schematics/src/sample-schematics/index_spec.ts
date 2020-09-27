import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';


const collectionPath = path.join(__dirname, '../collection.json');


describe('sample-schematics', () => {
  it('works', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic('sample-schematics', {
      name: 'test',
      path: './'
    }, Tree.empty());

    // assert files created
    expect(tree.files).toEqual([
      '/test.component.html',
      '/test.component.scss',
      '/test.component.ts',
    ]);

    // assert file contents
    expect(tree.readContent('/test.component.ts'))
      .toContain(
        `import { TestService } from './test.service'`
      )
    expect(tree.readContent('/test.component.ts'))
      .toContain(
        `selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']`
      )
    expect(tree.readContent('/test.component.ts'))
      .toContain(
        'export class TestComponent'
      )
    expect(tree.readContent('/test.component.ts'))
      .toContain(
        'private testService: TestService'
      )
  });
});
