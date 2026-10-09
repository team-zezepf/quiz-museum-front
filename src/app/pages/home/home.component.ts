import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of, startWith } from 'rxjs';
import { GraphQLService } from '../../services/graphql.service';

export type ApiState =
  | { status: 'checking' }
  | { status: 'ok'; environment: string }
  | { status: 'error' };

// トップ画面。今はタイトルと、API につながっているか(health)だけを表示する(front#1)
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private graphql = inject(GraphQLService);

  readonly api = toSignal(
    this.graphql.query<{ health: { status: string; environment: string } }>('{ health { status environment } }').pipe(
      map((data): ApiState => ({ status: 'ok', environment: data.health.environment })),
      catchError(() => of<ApiState>({ status: 'error' })),
      startWith<ApiState>({ status: 'checking' })
    ),
    { requireSync: true }
  );

  readonly environmentName = computed(() => {
    const api = this.api();
    return api.status === 'ok' ? api.environment : '';
  });
}
