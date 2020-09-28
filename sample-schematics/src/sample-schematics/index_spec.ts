import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';


const collectionPath = path.join(__dirname, '../collection.json');


describe('sample-schematics', () => {
  const runner = new SchematicTestRunner('schematics', collectionPath);

  it('should create component files', () => {
    const tree = runner.runSchematic('sample-schematics', {
      name: 'test',
      path: './'
    }, Tree.empty());

    // assert files created
    expect(tree.files).toEqual([
      '/test.component.html',
      '/test.component.scss',
      '/test.component.ts',
      '/test.service.ts',
      '/test.ts',
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

  it('should create component files specifying dash-separated name', () => {
    const tree = runner.runSchematic('sample-schematics', {
      name: 'test-sample',
      path: './'
    }, Tree.empty());

    // assert files created
    expect(tree.files).toEqual([
      '/test-sample.component.html',
      '/test-sample.component.scss',
      '/test-sample.component.ts',
      '/test-sample.service.ts',
      '/test-sample.ts',
    ]);

    // assert file contents
    expect(tree.readContent('/test-sample.component.ts'))
      .toContain(
        `import { TestSampleService } from './test-sample.service'`
      )
    expect(tree.readContent('/test-sample.component.ts'))
      .toContain(
        `selector: 'test-sample',
  templateUrl: './test-sample.component.html',
  styleUrls: ['./test-sample.component.scss']`
      )
    expect(tree.readContent('/test-sample.component.ts'))
      .toContain(
        'export class TestSampleComponent'
      )
    expect(tree.readContent('/test-sample.component.ts'))
      .toContain(
        'private testSampleService: TestSampleService'
      )
  });

  it('should create component files specifying nested path', () => {
    const tree = runner.runSchematic('sample-schematics', {
      name: 'test',
      path: './src/app/sample/test'
    }, Tree.empty());

    // assert files created
    expect(tree.files).toEqual([
      '/src/app/sample/test/test.component.html',
      '/src/app/sample/test/test.component.scss',
      '/src/app/sample/test/test.component.ts',
      '/src/app/sample/test/test.service.ts',
      '/src/app/sample/test/test.ts',
    ]);
  });

  it('should fail if name is not specified', async () => {
    let thrownError: Error | null = null;
    try {
      await runner.runSchematicAsync('sample-schematics', {
        path: './'
      }, Tree.empty()).toPromise();
    } catch (err) {
      thrownError = err;
    }

    expect(thrownError).toBeDefined();
  });

  it('should fail if path is not specified', async () => {
    let thrownError: Error | null = null;
    try {
      await runner.runSchematicAsync('sample-schematics', {
        name: 'test',
      }, Tree.empty()).toPromise();
    } catch (err) {
      thrownError = err;
    }

    expect(thrownError).toBeDefined();
  });
});
