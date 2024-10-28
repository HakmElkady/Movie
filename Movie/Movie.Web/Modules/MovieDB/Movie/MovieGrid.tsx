﻿import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { MovieColumns, MovieRow, MovieService } from '../../ServerTypes/MovieDB';
import { MovieDialog } from './MovieDialog';

@Decorators.registerClass('Movie.MovieDB.MovieGrid')
export class MovieGrid extends EntityGrid<MovieRow> {
    protected getColumnsKey() { return MovieColumns.columnsKey; }
    protected getDialogType() { return MovieDialog; }
    protected getRowDefinition() { return MovieRow; }
    protected getService() { return MovieService.baseUrl; }
}