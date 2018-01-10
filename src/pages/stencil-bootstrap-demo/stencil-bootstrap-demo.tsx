import { Component } from '@stencil/core';

@Component({
  tag: 'stencil-bootstrap-demo',
})
export class StencilBootstrapDemo {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 text-center">
            <h1>
              Web Components for Bootstrap 4 Beta
            </h1>

            <p>
              Built with <a href="https://stenciljs.com" target="blank">Stencil</a> &lt;3
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-3">
            <ul>
              <li>
                <stencil-route-link
                  url="/alerts"
                  urlMatch={['/', '/alerts']}
                  activeClass="active"
                  exact={true}
                >
                  Alerts
                </stencil-route-link>
              </li>
              <li>
                <stencil-route-link
                  url="/badge"
                  urlMatch={['/badge']}
                  activeClass="active"
                  exact={true}
                >
                  Badge
                </stencil-route-link>
              </li>
              <li>
                <stencil-route-link
                  url="/breadcrumb"
                  urlMatch={['/breadcrumb']}
                  activeClass="active"
                  exact={true}
                >
                  Breadcrumb
                </stencil-route-link>
              </li>
              <li>
                <stencil-route-link
                  url="/list"
                  urlMatch={['/list']}
                  activeClass="active"
                  exact={true}
                >
                  List
                </stencil-route-link>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-9">
            <stencil-router id="router">
              <stencil-route
                url={['/', '/alerts']}
                component="alerts-page"
                exact={true}
              >
              </stencil-route>
              <stencil-route
                url={['/badge']}
                component="badge-page"
                exact={true}
              >
              </stencil-route>
              <stencil-route
                url={['/breadcrumb']}
                component="breadcrumb-page"
                exact={true}
              >
              </stencil-route>
              <stencil-route
                url={['/list']}
                component="list-page"
                exact={true}
              >
              </stencil-route>
            </stencil-router>
          </div>
        </div>
      </div>
    );
  }
}
