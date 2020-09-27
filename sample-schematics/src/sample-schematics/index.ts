import { 
  Path,
  normalize,
  strings,
} from '@angular-devkit/core';
import { 
  Rule, 
  SchematicContext, 
  apply,
  branchAndMerge,
  mergeWith, 
  move,
  template, 
  url,
} from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function sampleSchematics(_options: any): Rule {
  return (_, _context: SchematicContext) => {
    // コードを生成するパスの指定
    const pathToCreate: Path = normalize(_options.path as string)

    return branchAndMerge(
      mergeWith(apply(url('./files'), [
        template({
          ...strings,
          name: _options.name,
        }),
        move(pathToCreate),
      ]))
    );
  };
}