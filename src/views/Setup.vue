<template>
  <div>
    <vue-headful
      title="Setup work space | Ava"
      description="Description goes here"
    />

    <div class="setup-section">
      <div class="row">
        <div class="col-12">
          <div class="brand-logo mt-25 ml-80 mb-60">
            <img v-lazy="localImg('ava.svg')" alt="ava" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center">
          <p>Continue setting up your workspace</p>

          <div class="stepper-container">
            <div class="stepper stepper-1">
              <span class="font-14">Workspace Name</span>
              <p class="text_grey_dark font-12">Name your Ava workspace</p>
            </div>
            <div class="stepper stepper-2">
              <span class="font-14">Send Invites (Optional)</span>
              <p class="text_grey_dark font-12">
                Invite your colleagues to Ava
              </p>
            </div>
            <div class="stepper stepper-3">
              <span class="font-14">Create Teams (Optional)</span>
              <p class="text_grey_dark font-12">Provide your team name</p>
            </div>
            <div class="stepper stepper-4">
              <span class="font-14">Setup Complete</span>
              <p class="text_grey_dark font-12">Start using Ava!</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-60">
        <div class="col-12">
          <form>
            <div v-if="step === 1">
              <div class="step-block">
                <p class="text-center text_grey_dark font-12">Welcome, Koko</p>
                <p class="text-center font-weight-bold mb-4">
                  This will only take a few minutes
                </p>

                <div class="d-flex flex-column">
                  <div class="form-group">
                    <label for="workspace" class="color_grey_dark font-13"
                      >Name your workspace</label
                    >
                    <input
                      type="text"
                      id="workspace"
                      class="form-control"
                      placeholder="Workspace name"
                    />
                  </div>
                </div>

                <div class="d-flex justify-content-end align-items-center">
                  <button class="btn btn-primary" @click.prevent="next()">
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div v-if="step === 2">
              <div class="step-block">
                <h6 class="text-center text_grey_dark font-12">
                  Welcome, Koko
                </h6>
                <h6 class="text-center font-weight-bold mb-4">
                  This will only take a few minutes
                </h6>
                <p class="font-12 text_grey_dark">
                  You can invite people to your new workspace on Ava. They will
                  receive your invite via email to join.
                </p>

                <div class="d-flex justify-content-between">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="emailList"
                      id="emailList"
                      checked
                    />
                    <label class="form-check-label font-12" for="emailList">
                      Provide list of emails
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="excelList"
                      id="excelList"
                    />
                    <label class="form-check-label font-12" for="excelList">
                      Import from excel
                    </label>
                  </div>
                </div>

                <hr />

                <div class="row mt-2">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="workspace" class="color_grey_dark font-12"
                        >Enter emails, seperated by comma</label
                      >
                      <input
                        type="text"
                        id="workspace"
                        class="form-control"
                        placeholder="colleague@mail.com, colleague2@mail.com"
                      />
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-end align-items-center">
                  <router-link :to="{ name: '' }" class="btn-link mr-2 font-12"
                    >Skip for now</router-link
                  >
                  <button class="btn btn-primary" @click.prevent="next()">
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div v-if="step === 3">
              <div class="step-block">
                <p class="text-center text_grey_dark font-12">Welcome, Koko</p>
                <p class="text-center font-weight-bold mb-4">
                  This will only take a few minutes
                </p>
                <p class="font-12 text_grey_dark">
                  Create teams for your workspace eg. Marketing, HR or anything
                  to group people into.
                </p>

                <div class="d-flex flex-column">
                  <div class="form-group">
                    <label for="teamName" class="color_grey_dark font-12"
                      >Team name</label
                    >
                    <input
                      type="text"
                      id="teamName"
                      class="form-control"
                      placeholder="Enter a team name"
                    />
                  </div>
                </div>

                <div class="d-flex justify-content-end align-items-center">
                  <span class="icon icon_add"></span>
                  <router-link
                    :to="{ name: '' }"
                    class="btn-link mr-2 font-12 mb-3"
                    >Add new team</router-link
                  >
                </div>

                <div class="d-flex justify-content-end align-items-center">
                  <router-link :to="{ name: '' }" class="btn-link mr-2 font-12"
                    >Skip for now</router-link
                  >
                  <button class="btn btn-primary" @click.prevent="next()">
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div v-if="step === 4">
              <div class="step-block">
                <h6 class="text-center font-15">
                  That’s it! You have completed the setup
                </h6>
                <p class="font-11">
                  Now you can manage your teams performances and progress with
                  ease
                </p>

                <div class="d-flex justify-content-center mb-5">
                  <img v-lazy="localImg('stamp.svg')" alt="stamp" />
                </div>

                <div class="d-flex justify-content-end align-items-center">
                  <button class="btn btn-primary">Start using Ava</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      registration: {},
    };
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
  },
};
</script>

<style lang="scss"></style>
