"use client";
import React from "react";
import type { FC } from "react";
import { ActionButton } from "../Layer/LayerController/ActionButton";
import { LayerId } from "../Layer/LayerContextProvider";
import Link from "next/link";

const NavBar: FC = () => {
  return (
    <nav
      className="bg-gradient-to-t from-transparent to-rose-100 to-40% sticky top-0 z-10 shadow-xs width-full flex justify-center justify-items-center pt-3 pb-4"
      data-testid="LayerController"
    >
      <Link href="/bio">
        <ActionButton layerId={LayerId.Biography} onClick={() => {}}>
          Biography
        </ActionButton>
      </Link>
      <Link href="/contact">
        <ActionButton layerId={LayerId.Contact} onClick={() => {}}>
          Contact
        </ActionButton>
      </Link>
      <ActionButton layerId={LayerId.Kids} onClick={() => {}}>
        Kids
      </ActionButton>
      <ActionButton layerId={LayerId.Projects} onClick={() => {}}>
        Projects
      </ActionButton>
      <ActionButton layerId={LayerId.TextAndDrafts} onClick={() => {}}>
        TextAndDrafts
      </ActionButton>
    </nav>
  );
};

export default NavBar;
