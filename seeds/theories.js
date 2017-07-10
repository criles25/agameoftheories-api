
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('api.theories').del()
    .then(function () {
      // Inserts seed entries
      return knex('api.theories').insert([
        {
          name: 'Littlefinger embezzled money from the Iron Throne',
          status: 'possible',
          links: [
            'https://www.reddit.com/r/asoiaf/comments/j5dbh/robert_didnt_beggar_the_realm_littlefinger_did/',
            'https://www.reddit.com/r/asoiaf/comments/hqf86/nonstandard_conspiracy_theorieswill_be/'
          ],
          got_spoilers_created: '1',
          asoiaf_spoilers_created: 'acok',
          approved_at: knex.fn.now(),
        },
        {
          name: 'Mance Rayder sent the Pink Letter',
          links: [
            'https://www.reddit.com/r/asoiaf/comments/mr3hi/speculation_about_a_certain_letter_in_adwd/'
          ],
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          status: 'possible'
        },
        {
          name: "Tywin Lannister had the tunnel to Chataya's brothel made",
          links: [
            'https://www.reddit.com/r/asoiaf/comments/ke9hy/spoilersspeculation_adwd_the_hand_whose_pride/'
          ],
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'asos',
          approved_at: knex.fn.now(),
          status: 'possible'
        },
        {
          name: "Arya was chasing Rhaeyns's kitten",
          got_spoilers_created: '1',
          asoiaf_spoilers_created: 'agot',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/i97y7/game_of_thrones_subtlety_arya_stark_and_rhaenys/'
          ],
          status: 'possible'
        },
        {
          name: 'The Others are not evil',
          got_spoilers_created: '1',
          asoiaf_spoilers_created: 'agot',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/ltfpt/what_if_the_others_arent_the_bad_guys/'
          ],
          status: 'possible'
        },
        {
          name: 'The prophesy of Sansa slaying a giant is her overthrowing Littlefinger at Winterfell',
          got_spoilers_created: '7',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/lhugx/insignificant_prophecies_asos_spoilers/'
          ],
          status: 'possible'
        },
        {
          name: "Rhaegar's birth at Summerhall was the result of an attempt to magically hatch dragons",
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'asos',
          approved_at: knex.fn.now(),
          links: [
            'http://towerofthehand.com/essays/chrisholden/summerhall.html'
          ],
          status: 'possible'
        },
        {
          name: 'Loras intended to die on Dragonstone',
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'affc',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/l4frs/the_fate_of_loras_unmarked_spoilers_all_books/'
          ],
          status: 'possible'
        },
        {
          name: "Loras was not actually wounded at Dragonstone",
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'affc',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/jll1j/the_knight_of_flowers_affc_spoilers/'
          ],
          status: 'possible'
        },
        {
          name: "The Hound is the valonqar",
          got_spoilers_created: '6',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/iyeox/a_theory_a_friend_has_regarding_cerseis_fate/'
          ],
          status: 'possible'
        },
        {
          name: "Varys truly does serve the Seven Kingdoms",
          got_spoilers_created: '6',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/hsrt8/who_does_varys_truly_serve_spoilers/'
          ],
          status: 'possible'
        },
        {
          name: 'Jojen was sacrificed to create the paste Bran ate',
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/m75f5/theory_concerning_jojen_unmarked_spoilers_all/'
          ],
          status: 'possible'
        },
        {
          name: "Robb warged into Grey Wind before his death",
          got_spoilers_created: '3',
          asoiaf_spoilers_created: 'asos',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/kq51x/unmarked_spoilers_all_books_concerning_wargs_and/?ref=search_posts'
          ],
          status: 'possible'
        },
        {
          name: "Missandei is Dany's third betrayal",
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/mgbn5/spoiler_adwd_and_once_for/?ref=search_posts'
          ],
          status: 'possible'
        },
        {
          name: "Dany is able to bear children again",
          got_spoilers_created: '6',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/lvik6/about_dany_unmarked_spoilers_all_books/',
            'https://www.reddit.com/r/asoiaf/comments/kc83e/adwd_unmarked_spoilers_daenerys_and_mirri_maz/?ref=search_posts'
          ],
          status: 'possible'
        },
        {
          name: "Wyman Manderly baked the missing Freys into the pies",
          got_spoilers_created: '6',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/lfg1c/what_was_in_the_winterfell_pie_spoilers_dwd/'
          ],
          status: 'possible'
        },
        {
          name: "Rhaegar + Lyanna = Jon Snow (R+L=J)",
          got_spoilers_created: '6',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/jrdub/the_kingsguard_the_lineage_of_jon_snowspoilers/',
            'https://www.reddit.com/r/asoiaf/comments/g8f0b/let_me_just_lay_out_all_the_reasons_for_rlj/',
            'https://www.reddit.com/r/asoiaf/comments/gkgc0/rlj/'
          ],
          status: 'possible'
        },
        {
          name: "The Stark family represents the seven aspects of the Seven",
          got_spoilers_created: '1',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/lgvhv/the_starks_and_the_seven_possible_spoilers_for/'
          ],
          status: 'possible'
        },
        {
          name: "Coldhands is Bloodraven skinchanging into Benjen Stark's dead body",
          got_spoilers_created: '6',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/l8aky/coldhands_speculation_spoilers_all_books/'
          ],
          status: 'possible'
        },
        {
          name: '"Waking a dragon from stone" refers to Jon Snow curing Aegon Targaryen of greyscale',
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/n3qan/spoilers_all_books_azor_ahai_prophecy/'
          ],
          status: 'possible'
        },
        {
          name: '"Waking dragons from stone" refers to geothermal activity beneath Winterfell that will kill the Boltons',
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/m3kxr/question_about_something_melisandre_said_about/'
          ],
          status: 'possible'
        },
        {
          name: '"The Sphinx is the riddle not the riddler" represents Tyrion being a dragonrider',
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/l3tyq/the_sphinx_is_the_riddle_not_the_riddler_spoilers/'
          ],
          status: 'possible'
        },
        {
          name: 'Gerion Lannister is alive and will give Brightroar to Tyrion',
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/modiz/the_laughing_lion_lives_spoilers/'
          ],
          status: 'possible'
        },
        {
          name: "Theon killed his own children when he had the Miller's children killed",
          got_spoilers_created:'4',
          asoiaf_spoilers_created: 'asos',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/ipcao/some_creepy_speculation_about_theon_in_clash_of/'
          ],
          status: 'possible'
        },
        {
          name: '"The three heads of the dragons" does not refer to three dragonriders',
          got_spoilers_created: '1',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/l5sdb/full_series_spoilers_three_heads_of_the_dragon/'
          ],
          status: 'possible'
        },
        {
          name: "The Shadow Lands connect to the Lands of Always Winter",
          got_spoilers_created: '1',
          asoiaf_spoilers_created: 'agot',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/i6o1z/my_theory_about_the_future_of_daenerys_maybe/'
          ],
          status: 'false'
        },
        {
          name: "Melisandre is using a glamour to hide her appearance",
          got_spoilers_created: '6',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/m26qx/melisandre_a_glamour_adwd_spoilers/'
          ],
          status: 'possible'
        },
        {
          name: "Young Griff (Aegon Targaryen) is the real, actual Aegon",
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/j83aa/adwd_spoilers_young_griff/'
          ],
          status: 'possible'
        },
        {
          name: '"Beware the perfumed seneschal" is referring to a character aboard the Selaesori Qhoran',
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/le27r/what_is_your_take_on_quaithe_prophecy_adwd/'
          ],
          status: 'possible'
        },
        {
          name: "The wildlings will destroy the Night's Watch following Jon Snow's murder",
          got_spoilers_created: '6',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/ixikz/my_personal_theory_about_jon_snow_dwd_spoilers/'
          ],
          status: 'possible'
        },
        {
          name: 'The Hound is alive and the gravedigger',
          got_spoilers_created: '6',
          asoiaf_spoilers_created: 'affc',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/gkhyk/the_hound_affc_spoilers_ahoy/'
          ],
          status: 'possible'
        },
        {
          name: 'The Blackfish never married because he loved Minisa Whent',
          got_spoilers_created: '1',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/k1iuz/why_the_blackfish_never_married_new_idea_unmarked/'
          ],
          status: 'possible'
        },
        {
          name: 'Bran will skinchange into a dragon',
          got_spoilers_created: '6',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/mirsh/whole_series_spoilers_about_bran/'
          ],
          status: 'possible'
        },
        {
          name: "Garth the Gross is Dany's betrayal for gold",
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/k4okd/regarding_daenerys_adwd_spoilers/'
          ],
          status: 'possible'
        },
        {
          name: 'Littlefinger was poisoning Lysa for years',
          got_spoilers_created: '4',
          asoiaf_spoilers_created: 'asos',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/gttpq/more_thoughts_lysa_robert_littlefinger_spoilers/'
          ],
          status: 'possible'
        },
        {
          name: "Howland Reed is disguising himself as Tom of Sevenstreams",
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/h5190/i_think_grrm_has_introduced_us_to_howland_reed/'
          ],
          status: 'false'
        },
        {
          name: 'Wylla is a Blackfyre',
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'asos',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/h98sy/wylla_blackfyre_possible_spoiler/'
          ],
          status: 'possible'
        },
        {
          name: "The Ghost of High Heart is Jenny of Oldstones",
          got_spoilers_created: 'none',
          asoiaf_spoilers_created: 'asos',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/i80w6/probable_spoilers_seer_on_the_hill/'
          ],
          status: 'possible'
        },
        {
          name: "Bran will break the Wall",
          got_spoilers_created: '7',
          asoiaf_spoilers_created: 'adwd',
          approved_at: knex.fn.now(),
          links: [
            'https://www.reddit.com/r/asoiaf/comments/i7agd/will_the_wall_be_broken_massive_unmarked_spoilers/'
          ],
          status: 'possible'
        }
      ]);
    });
};
